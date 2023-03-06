import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Count from '../Count/Count';
import MakeDifferent from '../MakeDifferent/MakeDifferent';
import ProudService from '../ProudService/ProudService/ProudService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ProudService></ProudService>
            <MakeDifferent></MakeDifferent>
            <Count></Count>
        </div>
    );
};

export default Home;