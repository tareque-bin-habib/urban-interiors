import React from 'react';
import { FaBath } from 'react-icons/fa';
import { FaShower } from 'react-icons/fa';
import { MdHotel } from 'react-icons/md';
import './Designer.css'

const Designer = () => {
    return (
        <div className='max-w-[1440px] mx-auto py-20'>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-24 py-10'>
                <div className='flex justify-center'>
                    <div>
                        <h3 className='text-gray-500 text-sm font-bold'>WHO WE ARE</h3>
                        <h1 className='xl:text-5xl lg:text-5xl md:text-4xl head font-bold pt-5'>Let your designer find the <br /> right pieces for you, your <br /> space and budget.</h1>
                        <p className=' text-gray-500 font-semibold py-5'>Moving into a new home can be one of life's great joys, but  it can also  be a time <br /> of uncertainty, especially when it comes to decorating.</p>

                    </div>
                </div>
                <div>
                    <div className='flex xl:justify-start lg:justify-start md:justify-center sm:justify-center gap-10 pb-10'>
                        <div>
                            <FaBath className='text-4xl text-pink-500'></FaBath>
                        </div>
                        <div>
                            <h1 className=' text-2xl font-bold pb-3'>Great Design For Creative Folks</h1>
                            <p className='text-xl text-gray-500'>We have great designer in our company for  design your <br /> dream house in your preferece</p>
                        </div>
                    </div>
                    <div className='flex xl:justify-start lg:justify-start md:justify-center sm:justify-center gap-10 pb-10'>
                        <div>
                            <FaShower className='text-4xl text-pink-500'></FaShower>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold pb-3'>Affordable style for living home</h1>
                            <p className='text-xl text-gray-500'>
                                Moving into a new home can be one of life's great <br /> joys, but it can also be a time of uncertainty</p>
                        </div>
                    </div>
                    <div className='flex xl:justify-start lg:justify-start md:justify-center sm:justify-center gap-10'>
                        <div>
                            <MdHotel className='text-4xl text-pink-500'></MdHotel>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold pb-3'> Luxurious Interior couches</h1>
                            <p className='text-xl text-gray-500'>We have great designer in our company for  design your <br /> dream house in your preferece</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Designer;