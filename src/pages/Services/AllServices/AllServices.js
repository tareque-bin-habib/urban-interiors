import React, { useEffect, useState } from 'react';
import AllService from './AllService';

const AllServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='max-w-[1440px] mx-auto py-20'>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:xl:grid-cols-1 gap-10 ' >
                {
                    services.map(service => <AllService service={service} key={service.id}></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;