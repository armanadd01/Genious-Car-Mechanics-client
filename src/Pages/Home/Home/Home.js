import React from 'react';
import AddServices from '../AddServices/AddServices';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <AddServices></AddServices>
        </div>
    );
};

export default Home;