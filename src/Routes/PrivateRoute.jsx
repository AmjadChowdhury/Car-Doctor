import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="justify-center my-2 flex items-center">
        <span className="loading loading-bars loading-md mr-2"></span>
        <span className="text-orange-500 font-bold">ektu wait koro...</span>
    </div>
    }
    if(user){
        return children
    }
    return <>
    <Navigate to="/login" state={location.pathname}></Navigate>
    </>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;