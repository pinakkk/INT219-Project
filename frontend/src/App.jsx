// import { HomePage } from "./screens/Homepage/HomePage";
// import { Navbar } from "./screens/HomePage/Navbar";
// import Login from "./screens/Login/Login";
// import Register from "./screens/Register/Register";

// function App() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       {/* <HomePage/> */}
//       {/* <Login /> */}
//       <Register/>
//     </>
//   );
// }

// export default App;


// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
