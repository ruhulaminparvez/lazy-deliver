import React from "react";
import Banner from './../Banner/Banner';
import LimitService from './LimitService';
import ChooseUs from './../ChooseUs/ChooseUs';
import FAQ from './../FAQ/FAQ';


const Home = () => {
  return (
    <div>
        <Banner></Banner> 
        <LimitService></LimitService>
        <ChooseUs></ChooseUs>
        <FAQ></FAQ>
    </div>
  );
};

export default Home;
