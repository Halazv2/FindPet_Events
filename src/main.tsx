import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import App from "./App";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <RouterProvider router={router} />
    </ConvexProvider>
  </React.StrictMode>,
);
