import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Common pages
import Register from "../pages/Register"
import Login from "../pages/Login"
import SendMoney from "../pages/SendMoney"
import LandingPage from "../pages/LandingPage"

// Normal User pages
import UserHome from "../pages/user/UserHome";
import Transactions from "../pages/Transactions";

// Merchant pages
import MerchantHome from "../pages/merchant/MerchantHome"
import Dashboard from "../pages/merchant/Dashboard"
import Report from "../pages/merchant/Report"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<LandingPage/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"home",
                element:<UserHome/>
            },
            {
                path:"dashboard",
                element:<Dashboard/>
            },
            {
                path:"send",
                element:<SendMoney/>
            },
            {
                path:"history",
                element:<Transactions/>
            },
        ]

    },
    {
        path:"/merchant",
        element:<App/>,
        children:[
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"home",
                element:<MerchantHome/>
            },
            {
                path:"dashboard",
                element:<Dashboard/>
            },
            {
                path:"send",
                element:<SendMoney/>
            },
            {
                path:"history",
                element:<Transactions/>
            },
            {
                path:"report",
                element:<Report/>
            },
        ]

    }
])

export default router;