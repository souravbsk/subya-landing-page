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
    ],
  },
]);

export default router;
