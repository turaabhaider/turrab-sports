import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // This imports your Tailwind CSS styles

/**
 * The root entry point for Turrab Sports.
 * It renders the App component which contains our 
 * Signup, Login, and Live Arena routes.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);