import {createBrowserRouter,  } from "react-router-dom"
import Layout from "../components/common/Layout"
import Landingscreen from "../pages/Landingscreen"
import Detailed from "../pages/Detailed"
import Products from "../pages/Products"
import Authscreen from "../pages/Auth/Authscreen"
import Sale from "../pages/Sale"
import Rent from "../pages/Rent"
import Agents from "../pages/Agents"
import Shortlet from "../pages/Shortlet"
import Register from "../pages/Auth/Register"
import SignIn from "../pages/Auth/SignIn"
import UserDashboard from "../Screen/UserPage/UserDashboard"
import Userhome from "../Screen/UserPage/Userhome"
import AuthenticationScreen from "../pages/Auth/AuthenticationScreen"
import UserScreen from "../Screen/UserPage/userScreen"
// import PrivateRouter from "./PrivateRouter"




export const Mainrouter =createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
            index:true,
            element:<Landingscreen/>,
            
        },
        {
          index:true,
          element:<Detailed/>
        },
        {
          index:true,
          element:<Products/>
        },
      ],
      
    },
    {
      path:"/authenticationScreen",
      element:<AuthenticationScreen/>,
    },
    {
      path:"/authscreen",
      element:<Authscreen/>,
    },
    {
      path:"/Sale",
      element:<Sale/>,
    },
    {
      path:"/Rent",
      element:<Rent/>,
    },
    {
      path:"/Agents",
      element:<Agents/>,
    },
    {
      path:"/Shortlet",
      element:<Shortlet/>,
    },
    {
      path:"/Authscreen",
      element:<Authscreen/>,
    },
    {
      path:"/Signin",
      element:<SignIn/>,
    },
    {
      path:"/UserDashboard",
      element:<UserDashboard/>,
    },
    {
      path:"/Userhome",
      element:<Userhome/>,
    },
    {
      path:"/userscreen",
      element:<UserScreen/>,
    }
])