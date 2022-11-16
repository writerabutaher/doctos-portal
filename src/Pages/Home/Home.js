import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import InfoCard from './InfoCard';
import Hero from './Hero';
import ServiceCard from './ServiceCard';
import Testimonial from './Testimonial';
import Login from './Login';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <ServiceCard></ServiceCard>
            <Hero></Hero>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Login></Login>
        </>
    );
};

export default Home;