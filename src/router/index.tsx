import { createBrowserRouter } from "react-router-dom";
import App from "@src/App.tsx";
import Home from "@views/Home";
import Layout from "@layouts/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>asd</Layout>,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <div>About</div>
      }
    ]
  },
  {
    path: "/login",
    element: <div>Login</div>,
    index: true
  }
]);
