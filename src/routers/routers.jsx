import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import OurJourney from "../Pages/OurJourney/OurJourney";
import OurMission from "../Pages/OurMission/OurMission";
import OurSolution from "../Pages/OurSolution/OurSolution";
import PrivacyPolicy from "../Shared/Privacy-Policy/PrivacyPolicy";
import ReturnPolicy from "../Shared/ReturnPolicy/ReturnPolicy";
import ShippingPolicy from "../Shared/ShippingPolicy/ShippingPolicy";
import TermConditions from "../Shared/TermConditions/TermConditions";
import AdminDashboard from "../layout/AdminDashboard";
import Dashboard from "../Dashboard/Admin/AdminPages/Dashboard/Dashboard";
import HandloomContent from "../Pages/HandloomContent/HandloomContent";
import ArtisansWithOndc from "../Pages/ArtisansWithOndc/ArtisansWithOndc";
import AllBlogs from "../Dashboard/Admin/AdminPages/Blogs/AllBlogs/AllBlogs";
import Categories from "../Dashboard/Admin/AdminPages/Blogs/Categories/Categories";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Auth from "../layout/Auth";
import JoinMovement from "../Pages/JoinMovement/JoinMovement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/support-the-cause",
        element: <JoinMovement></JoinMovement>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/return-policy",
        element: <ReturnPolicy></ReturnPolicy>,
      },
      {
        path: "/shipping-policy",
        element: <ShippingPolicy></ShippingPolicy>,
      },
      {
        path: "/term-condition",
        element: <TermConditions></TermConditions>,
      },
      {
        path: "/our-journey",
        element: <OurJourney></OurJourney>,
      },
      {
        path: "/our-mission",
        element: <OurMission></OurMission>,
      },
      {
        path: "/our-solution",
        element: <OurSolution></OurSolution>,
      },
      {
        path: "/indian-handicraft-livelihood",
        element: <HandloomContent></HandloomContent>,
      },
      {
        path: "/artisans-with-ondc",
        element: <ArtisansWithOndc></ArtisansWithOndc>,
      },
    ],
  },
  {
    path: "/",
    element: <Auth></Auth>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/admin/blogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/admin/blogs/categories",
        element: <Categories></Categories>,
      },
    ],
  },
]);

export default router;
