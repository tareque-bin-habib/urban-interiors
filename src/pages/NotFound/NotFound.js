import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const NotFound = () => {
    return (
        <div className='lg:py-32 md:py-28 sm:py-28'>
            <div className='flex justify-center'>
                <img className='w-1/5' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />
            </div>
            <h1 className='text-center text-gray-500 lg:text-4xl md:text-2xl sm:text-2xl font-bold py-4'>Something's Missing...</h1>
            <h1 className='lg:text-2xl md:text-xl sm:text-xl text-center text-teal-500 font-bold py-5'> <Link to='/' >Go Back</Link></h1>




        </div>
    );
};

export default NotFound;