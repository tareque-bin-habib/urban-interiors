import React from 'react';
import AllServices from '../AllServices/AllServices';
import ServicesBanner from '../ServicesBanner/ServicesBanner';

const Services = () => {
    return (
        <div>
            <ServicesBanner></ServicesBanner>
            <AllServices></AllServices>
        </div>
    );
};

export default Services;