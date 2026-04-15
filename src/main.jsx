import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/homepage/HomePage";
import Timeline from "./pages/timeline/Timeline";
import FriendDetails from "./pages/fdetails/FriendDetails";
import Stats from "./pages/stats/Stats";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      
      {
        path: "/fdetails",
        element: <FriendDetails />
      },
      
      {
        path: "/timeline",
        element: <Timeline />
      },
       {
        path: "/stats",
        element: <Stats />
      }
    ]
  },
   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
