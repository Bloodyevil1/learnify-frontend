import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import ThemeContextProvider from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <App />
    <Toaster position="top-right" />
  </ThemeContextProvider>
);