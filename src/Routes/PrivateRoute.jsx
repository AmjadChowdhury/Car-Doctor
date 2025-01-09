import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className="justify-center my-2 flex items-center">
        <span className="loading loading-bars loading-md mr-2"></span>
        <span className="text-orange-500 font-bold">ektu wait koro...</span>
    </div>
    }
    if(user){
        return children
    }
    Swal.fire({
        title: "Can not access?",
        text: "LogIn Your Account",
        icon: "question"
      });
    return <>
    <Navigate to="/login"></Navigate>
    </>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;