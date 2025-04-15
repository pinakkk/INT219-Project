import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Existing Screens
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import ContactPage from "./screens/Contact/ContactPage";
import Dashboard from "./screens/Dashboard/Dashboard";

// New Game Modules & Optional Screens
import IPQuest from "./screens/GameModules/IPQuest";
import IPDefender from "./screens/GameModules/IPDefender";
import InnovationTycoon from "./screens/GameModules/InnovationTycoon";
import AvatarCustomizer from "./screens/GameModules/AvatarCustomizer";
import Scoreboard from "./screens/GameModules/Scoreboard";

// Additional Screens
import Privacy from "./screens/Legal/Privacy";
import Terms from "./screens/Legal/Terms";
import Library from "./screens/Library/Library";
import Patents from "./screens/Library/Patents";
import Trademarks from "./screens/Library/Trademarks";
import Copyright from "./screens/Library/Copyright";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* New Routes for Game Modules */}
        <Route path="/ipquest" element={<IPQuest />} />
        <Route path="/ipdefender" element={<IPDefender />} />
        <Route path="/innovationtycoon" element={<InnovationTycoon />} />
        {/* Optional Routes */}
        <Route path="/avatar" element={<AvatarCustomizer />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        {/* Additional Routes */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/patents" element={<Patents />} />
        <Route path="/library/trademarks" element={<Trademarks />} />
        <Route path="/library/copyright" element={<Copyright />} />
      </Routes>
    </Router>
  );
}

export default App;
