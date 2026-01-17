import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Pages - Updated to match your folder
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import LiveStream from './pages/LiveStream'; // This is your main file

// Helper to protect the Dashboard
const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Registration Flow */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* We use the SAME file (LiveStream.jsx) but 
           different paths if you want the banner and 
           video to be in the same place.
        */}
        <Route path="/live-matches" element={<LiveStream />} />
        <Route path="/live-stream" element={<LiveStream />} />

        {/* User Account */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />

        {/* Landing Redirect */}
        <Route path="/" element={<Navigate to="/live-matches" />} />
      </Routes>
    </Router>
  );
}

export default App;