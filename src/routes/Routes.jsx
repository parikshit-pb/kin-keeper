import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import FriendDetails from "../pages/fdetails/FriendDetails";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import Footer from "../component/footer/Footer";
import Errorpage from "../pages/errorPage/Errorpage";
import YourFriend from "../component/friend/YourFriend";
import Banner from "../component/banner/Banner";


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
        index: "/banner",
        element: <Banner />
      },
      
      {
        path: "/friend/:id",
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
      },
      {
        path: "/friend",
        element: <YourFriend />
      }
    ],
    errorElement: <Errorpage />
  },
   
]);
