import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from './pages/Home'
import July from './pages/July'
import Aug from './pages/Aug'
import May from './pages/May'

import "./pages/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/july" element={<July />} />
        <Route path="/aug" element={<Aug />} />
        <Route path="/may" element={<May />} />
        {/* <Route path="article/:id" element={<Article />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
