import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./home.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./projects/[id].tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          Component={() => (
                <Home />
          )}
        />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
