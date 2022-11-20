import React from 'react';
import Banner from './Banner';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './ServiceCards/Services';
import Terms from './Terms';
import Testimonials from './Testimonials/Testimonials';

const Home = (props) => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Terms></Terms>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;