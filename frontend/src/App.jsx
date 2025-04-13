// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import ContactPage from "./screens/Contact/ContactPage"
import Dashboard from "./screens/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard Route */}
      </Routes>
    </Router>
  );
}

export default App;
