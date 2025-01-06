import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Main = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
               <Navbar></Navbar>
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;