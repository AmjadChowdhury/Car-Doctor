import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Main = () => {
    return (
        <div className="p-1 lg:p-2">
            <div className="max-w-6xl mx-auto">
               <Navbar></Navbar>
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;