import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import MenuPage from "../pages/menuPage/MenuPage";
import Order from "../pages/order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SignUp";
import PrivateRoute from "../privetRoute/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <MenuPage></MenuPage>
      },
     {
  path: "/order",
  element: <PrivateRoute>
     <Order></Order>
  </PrivateRoute>
},
{
  path: "/order/:category",
  element: <Order></Order>
},
{
  path: "/login",
  element: <Login></Login>
},
{
  path: "/signUp",
  element: <SignUp></SignUp>
}
    ]
  },
]);