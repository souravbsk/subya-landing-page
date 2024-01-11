import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import OurJourney from "../Pages/OurJourney/OurJourney";

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
        }
    ]
}
])

export default router;