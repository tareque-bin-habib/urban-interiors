import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import CompanyActivity from '../CompanyActivity/CompanyActivity';
import Designer from '../Designer/Designer';
import OurExperience from '../OurExperience/OurExperience';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <OurExperience></OurExperience>
            <CompanyActivity></CompanyActivity>
            <Designer></Designer>
        </div>
    );
};

export default About;   