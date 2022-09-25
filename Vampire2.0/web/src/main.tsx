import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return null
  /*return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );*/
}
