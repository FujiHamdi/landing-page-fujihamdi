import React from "react";
import ReactDOM from "react-dom/client";
import Page from "@/app/page"; // your landing page
import "@/styles/globals.css"; // Tailwind CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
