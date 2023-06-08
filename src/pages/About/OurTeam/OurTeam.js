import React, { useEffect, useState } from 'react';
import SingleTeam from './SingleTeam';

const OurTeam = () => {
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/team')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, [])


    return (
        <div className='bg-gray-200'>
            <div className='max-w-[1440px] mx-auto py-20' data-aos="fade-down">
                <h3 className='text-teal-500 text-xl font-bold text-center'>OUR TEAM MEMBERS</h3>
                <h1 className='text-5xl text-center font-bold py-3'>Our Creative Team</h1>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-20' data-aos="fade-down">
                    {
                        team.map(single => <SingleTeam single={single} key={single._id}></SingleTeam>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurTeam;