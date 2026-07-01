import React from "react";
import ReactDOM from "react-dom/client";
import Page from "@/app/page"; // your landing page
import "@/styles/globals.css"; // Tailwind CSS
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ThemeProvider>
        <Page />
      </ThemeProvider>
  </React.StrictMode>
);
