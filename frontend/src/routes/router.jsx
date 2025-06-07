import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Normal User pages

import Register from "../pages/Register"
import Login from "../pages/Login"
import Dashboard from "../pages/user/Dashboard"
import SendMoney from "../pages/SendMoney"
import LandingPage from "../pages/user/LandingPage"


// // Merchant pages
// import Dashboard from "../pages/merchant/Dashboard";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<LandingPage/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/Login",
                element:<Login/>
            },
            {
                path:"/dashboard",
                element:<Dashboard/>
            },
            {
                path:"/send",
                element:<SendMoney/>
            },
        ]

    }
])

export default router;