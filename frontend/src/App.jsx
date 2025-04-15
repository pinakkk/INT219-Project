// // App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./screens/Login/Login";
// import Register from "./screens/Register/Register";
// import ContactPage from "./screens/Contact/ContactPage"
// import Dashboard from "./screens/Dashboard/Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/contactpage" element={<ContactPage />} />
//         <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard Route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;




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
      </Routes>
    </Router>
  );
}

export default App;
