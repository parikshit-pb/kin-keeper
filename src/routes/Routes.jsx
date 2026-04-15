import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import FriendDetails from "../pages/fdetails/FriendDetails";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import Footer from "../component/footer/Footer";

export const router = createBrowserRouter([
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
      },
       {
        path: "/footer",
        element: <Footer />
      }
    ]
  },
   
]);
