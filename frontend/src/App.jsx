// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import ContactPage from "./screens/Contact/ContactPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
