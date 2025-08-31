import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import MenuPage from "../pages/menuPage/MenuPage";
import Order from "../pages/order/Order";
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
  element: <Order></Order>
},
{
  path: "/order/:category",
  element: <Order></Order>
}

    ]
  },
]);