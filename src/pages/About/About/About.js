import React from 'react';
import SecondBanner from '../../Home/SecondBanner/SecondBanner';
import AboutBanner from '../AboutBanner/AboutBanner';
import CompanyActivity from '../CompanyActivity/CompanyActivity';
import Designer from '../Designer/Designer';
import OurExperience from '../OurExperience/OurExperience';
import OurTeam from '../OurTeam/OurTeam';
import Review from '../Review/Review';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <OurExperience></OurExperience>
            <CompanyActivity></CompanyActivity>
            <Designer></Designer>
            <OurTeam></OurTeam>
            <Review></Review>
        </div>
    );
};

export default About;   