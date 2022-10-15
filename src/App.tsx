import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayoutRoutes } from "./@shared/routes/LayoutRoutes";

function App() {
  const router = createBrowserRouter(LayoutRoutes);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
