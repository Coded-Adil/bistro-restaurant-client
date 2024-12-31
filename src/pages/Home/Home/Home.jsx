import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import PopulerMenu from "../PopularMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <PopulerMenu />
            <Feature />
            <Testimonials />
        </div>
    );
};

export default Home;