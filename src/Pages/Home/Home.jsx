import { useContext } from "react";
import About from "./About";
import Banner from "./Banner";
import CustomerRev from "./CustomerRev";
import Features from "./Features";
import Products from "./Products";
import Services from "./Services";
import Team from "./Team";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {
    const {loading} = useContext(AuthContext)
    return (
        <div className="space-y-2">
            <Banner></Banner>
            <About></About>
            {
                loading ? <div className="flex items-center justify-center my-2">
                    <span className="loading loading-bars loading-md mr-2"></span>
                    <span className="text-orange-500 font-bold">SERVICE Loading...</span>
                </div> :
                <Services></Services>
            }
            <Products></Products>
            <Team></Team>
            <Features></Features>
            <CustomerRev></CustomerRev>
        </div>
    );
};

export default Home;