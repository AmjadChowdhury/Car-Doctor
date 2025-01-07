import {  Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/images/login/login.svg"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1 className="text-4xl font-bold text-red-500 text-center">{error.statusText}</h1>
            <h1 className="text-6xl font-bold text-red-700 text-center">{error.status}</h1>
            <img src={errorImg} alt="" className="w-full lg:w-1/2 p-2 m-auto" />
            <Link to="/" className="btn bg-orange-500 p-2 font-extrabold">Home</Link>
        </div>
    );
};

export default ErrorPage;