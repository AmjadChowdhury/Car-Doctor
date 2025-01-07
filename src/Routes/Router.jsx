import {createBrowserRouter} from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Pages/ServiceDeatils/ServiceDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CartDetails from "../Pages/CartDetails/CartDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/service/:id",
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "/bookings/:id",
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "/cart",
          element: <CartDetails></CartDetails>
        }
      ]
    },
]);

export default router