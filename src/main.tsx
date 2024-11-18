import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

// CSS
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// Store
import store from "./store";

// Router
import router from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider value={defaultSystem}>
        <ToastContainer />
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
