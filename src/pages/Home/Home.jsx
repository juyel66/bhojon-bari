import { Helmet } from 'react-helmet-async';
import { Banner } from './Banner/Banner';
import Category from './Category/Category';
import Hero from './Hero';

import ContactUs from './contactUs';
import Fetured from '../../Layout/Fetured';
import Popularmenu from './Popularmenu';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bhojon Bari | Home</title>

            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Hero></Hero>
           <Popularmenu></Popularmenu>
            <ContactUs></ContactUs>
            <Fetured></Fetured>
        </div>
    );
};

export default Home;