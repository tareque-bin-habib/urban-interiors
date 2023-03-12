import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import CompanyActivity from '../CompanyActivity/CompanyActivity';
import Designer from '../Designer/Designer';
import OurExperience from '../OurExperience/OurExperience';
import OurTeam from '../OurTeam/OurTeam';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <OurExperience></OurExperience>
            <CompanyActivity></CompanyActivity>
            <Designer></Designer>
            <OurTeam></OurTeam>
        </div>
    );
};

export default About;   