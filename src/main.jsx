import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import "./index.css"
import { router } from "./routes/Routes";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
