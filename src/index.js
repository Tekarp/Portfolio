import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// GitHub Pages: basename must be the pathname only (e.g. /Portfolio), not the full PUBLIC_URL
const getBasename = () => {
  const url = process.env.PUBLIC_URL;
  if (!url) return "";
  try {
    const path = new URL(url).pathname;
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } catch {
    return "";
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={getBasename()}>
    <App />
  </BrowserRouter>
);
