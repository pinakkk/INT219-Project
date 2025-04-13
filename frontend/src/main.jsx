import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensure Tailwind CSS is imported here

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
