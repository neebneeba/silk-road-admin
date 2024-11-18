import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import Product from "@/pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

export default router;
