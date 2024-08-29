import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from "./projects/[id].tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/:id',
    element: <ProjectPage />,
  },
]
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
