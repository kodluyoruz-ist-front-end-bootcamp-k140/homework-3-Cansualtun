import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./ToDo";
import Navbar from "./Navbar";
import { ThemeProvider } from "./contexts/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Navbar />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
