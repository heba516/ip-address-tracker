import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/ip-address-tracker/", // Ensure this path matches the base URL
    element: <App />,
  },
  {
    path: "*",
    element: <p>Not found</p>,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
