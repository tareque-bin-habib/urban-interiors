import React from 'react';
import './CompanyActivity.css'

const CompanyActivity = () => {
    return (
        <div className='bg-gray-200 py-20'>
            <div className='max-w-[1440px] mx-auto py-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ' data-aos="fade-down">
                <div className='activity'>
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold pb-5'>Founded In 2010</h3>
                        <h1 className='text-pink-500 text-5xl font-bold pb-5'>2010</h1>
                        <h3 className='font-bold text-gray-500'>YEAR WE FOUNDED</h3>
                    </div>
                </div>
                <div className='activity'>
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold pb-5'>Proudly Received</h3>
                        <h1 className='text-pink-500 text-5xl font-bold pb-5'>120</h1>
                        <h3 className='font-bold text-gray-500'>NO: OF AWARDS</h3>
                    </div>
                </div>
                <div className='activity'>
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold pb-5'>Number Of Clients</h3>
                        <h1 className='text-pink-500 text-5xl font-bold pb-5'>1500</h1>
                        <h3 className='font-bold text-gray-500'>DAILY CLIENTS</h3>
                    </div>
                </div>
                <div className='activity'>
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold pb-5'>Work Completed</h3>
                        <h1 className='text-pink-500 text-5xl font-bold pb-5'>1500</h1>
                        <h3 className='font-bold text-gray-500'>PROJECTS DONE</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyActivity;