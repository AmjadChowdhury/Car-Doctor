import About from "./About";
import Banner from "./Banner";
import Features from "./Features";
import Services from "./Services";
import Team from "./Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;