import {createBrowserRouter} from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Pages/ServiceDeatils/ServiceDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CartDetails from "../Pages/CartDetails/CartDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-three-topaz.vercel.app/services/${params.id}`)
        },
        {
          path: "/bookings/:id",
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`https://car-doctor-server-three-topaz.vercel.app/services/${params.id}`)
        },
        {
          path: "/cart",
          element: <PrivateRoute><CartDetails></CartDetails></PrivateRoute>
        }
      ]
    },
]);

export default router