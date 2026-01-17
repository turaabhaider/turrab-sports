const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { RtcTokenBuilder, RtcRole } = require('agora-access-token');

const app = express();
app.use(cors());
app.use(express.json());

// --- YOUR AGORA KEYS (INTEGRATED) ---
const APP_ID = 'f7eba401610743d8bd1a8c1b13ad66ba'; 
const APP_CERTIFICATE = '102b6c48e90e4c1dbce7cb5f02966732';

// 1. DATABASE CONNECTION
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'turaab2011', // Ensure this matches your Workbench password
  database: 'turrab_sports',
  waitForConnections: true,
  connectionLimit: 10
});

// Test DB Connection
db.getConnection((err, connection) => {
  if (err) console.log("❌ DB Error: " + err.message);
  else {
    console.log("✅ DATABASE CONNECTED SUCCESSFULLY");
    connection.release();
  }
});

// 2. AGORA TOKEN GENERATOR
app.get('/api/get-token', (req, res) => {
  const channelName = req.query.channel || 'turrab-main';
  const uid = 0; 
  const role = RtcRole.PUBLISHER;
  const privilegeExpireTime = Math.floor(Date.now() / 1000) + 3600;

  const token = RtcTokenBuilder.buildTokenWithUid(
    APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpireTime
  );
  res.json({ token });
});

// 3. SIGNUP ROUTE (8-Column Table Support)
app.post('/api/signup', (req, res) => {
  const { fullName, email, password, clubName } = req.body;
  const sql = "INSERT INTO users (fullName, email, password, clubName) VALUES (?, ?, ?, ?)";
  db.query(sql, [fullName, email, password, clubName], (err) => {
    if (err) return res.status(500).json({ message: "Database Error" });
    res.status(201).json({ message: "Success" });
  });
});

// 4. LOGIN ROUTE
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: "Database Error" });
    if (results.length > 0) res.status(200).json({ message: "Success", user: results[0] });
    else res.status(401).json({ message: "Invalid Credentials" });
  });
});

app.listen(5000, () => console.log("🚀 Backend Server live on port 5000"));