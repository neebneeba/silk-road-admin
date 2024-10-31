import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// CSS
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// Router
import router from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  </StrictMode>
);
