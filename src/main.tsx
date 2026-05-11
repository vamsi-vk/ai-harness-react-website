import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Self-hosted fonts (replaces fonts.googleapis.com / fonts.gstatic.com).
// Vite bundles the woff2 files into dist/assets with content hashes so the
// browser caches them indefinitely (Cache-Control: immutable, configured in
// vercel.json). font-display: swap is built into each @font-face by fontsource.
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
