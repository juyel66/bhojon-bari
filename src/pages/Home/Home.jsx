import React from 'react';
import { Banner } from './Banner/Banner';
import Category from './Category/Category';
import Hero from './Hero';
import Popularamenu from './popularamenu';
import ContactUs from './contactUs';
import Fetured from '../../Layout/Fetured';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Hero></Hero>
           <Popularamenu></Popularamenu>
           <ContactUs></ContactUs>
          <Fetured></Fetured>
        </div>
    );
};

export default Home;