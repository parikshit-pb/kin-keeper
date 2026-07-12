import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import "./index.css"
import { router } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  </StrictMode>
)
