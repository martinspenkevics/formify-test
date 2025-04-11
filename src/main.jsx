import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./formify/formify.es.js";
import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
