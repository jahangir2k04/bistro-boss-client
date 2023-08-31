import { Helmet } from "react-helmet-async";
import CallUs from "../../components/CallUs";
import AboutBistro from "./AboutBistro";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import RecommendsChef from "./RecommendsChef";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <AboutBistro></AboutBistro>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <RecommendsChef></RecommendsChef>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;