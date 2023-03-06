import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Count from '../Count/Count';
import MakeDifferent from '../MakeDifferent/MakeDifferent';
import ProudService from '../ProudService/ProudService/ProudService';
import SecondBanner from '../SecondBanner/SecondBanner';
import StayUpdated from '../StayUpdated/StayUpdated';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ProudService></ProudService>
            <MakeDifferent></MakeDifferent>
            <Count></Count>
            <SecondBanner></SecondBanner>
            <StayUpdated></StayUpdated>
        </div>
    );
};

export default Home;