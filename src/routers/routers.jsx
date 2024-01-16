import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import OurJourney from "../Pages/OurJourney/OurJourney";
import OurMission from "../Pages/OurMission/OurMission";
import OurSolution from "../Pages/OurSolution/OurSolution";

const router = createBrowserRouter([
{
    path:"/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/our-journey",
            element:<OurJourney></OurJourney>,
        },
        {
            path:"/our-mission",
            element:<OurMission></OurMission>
        },
        {
            path:"/our-solution",
            element:<OurSolution></OurSolution>
        }
    ]
}
])

export default router;