import About from "./About";
import Banner from "./Banner";
import Features from "./Features";
import Products from "./Products";
import Services from "./Services";
import Team from "./Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;