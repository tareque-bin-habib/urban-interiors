import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ProudService from '../ProudService/ProudService/ProudService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ProudService></ProudService>
        </div>
    );
};

export default Home;