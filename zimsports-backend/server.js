const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { RtcTokenBuilder, RtcRole } = require('agora-access-token');
require('dotenv').config();

const app = express();

// 1. CORS CONFIGURATION
// Allows your local React app and your Railway frontend to talk to this API
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// 2. AGORA CONFIGURATION (Uses Environment Variables for security)
const APP_ID = process.env.AGORA_APP_ID || 'f7eba401610743d8bd1a8c1b13ad66ba'; 
const APP_CERTIFICATE = process.env.AGORA_APP_CERTIFICATE || '102b6c48e90e4c1dbce7cb5f02966732';

// 3. DATABASE CONNECTION (Works for Local and Railway)
const db = mysql.createPool(process.env.MYSQL_URL || {
  host: 'localhost',
  user: 'root',
  password: 'turaab2011',
  database: 'turrab_sports',
  waitForConnections: true,
  connectionLimit: 10
});

// Test Connection
db.getConnection((err, connection) => {
  if (err) {
    console.log("❌ DB Error: " + err.message);
  } else {
    console.log("✅ DATABASE CONNECTED SUCCESSFULLY");
    connection.release();
  }
});

// 4. ROUTES
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

app.post('/api/signup', (req, res) => {
  const { fullName, email, password, clubName } = req.body;
  const sql = "INSERT INTO users (fullName, email, password, clubName) VALUES (?, ?, ?, ?)";
  db.query(sql, [fullName, email, password, clubName], (err) => {
    if (err) return res.status(500).json({ message: "Database Error" });
    res.status(201).json({ message: "Success" });
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: "Database Error" });
    if (results.length > 0) res.status(200).json({ message: "Success", user: results[0] });
    else res.status(401).json({ message: "Invalid Credentials" });
  });
});

// 5. SERVER START (Crucial: 0.0.0.0 for Railway deployment)
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend Server live on port ${PORT}`);
});