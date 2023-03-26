import React from 'react';
import { Link } from 'react-router-dom';
import './Count.css'

const Count = () => {
    return (
        <div className="max-w-[1440px] mx-auto 2xl:py-20 xl:py-20 lg:py-20 md:py-5 sm:py-5 count" data-aos="fade-down"  >
            <div className='lg:flex md:flex-row xl:gap-40 lg:gap-20 count-gap'>
                <div className='flex justify-center items-center md:pb-10 sm:pb-10' >
                    <img src="https://demo.w3layouts.com/demos_new/template_demo/06-06-2020/home-interior-liberty-demo_Free/779565612/web/assets/images/s2.jpg" alt="" />
                </div>
                <div className='count'>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1  xl:gap-20 lg:gap-10'>
                        <div className='content'>
                            <h2 className='xl:text-4xl lg:text-2xl md:text-4xl sm:text-4xl font-bold counter'>125</h2>
                            <h3 className='xl:text-2xl lg:text-sm md:text-2xl sm:text-2xl text-gray-500'>Designers</h3>
                        </div>
                        <div className='content'>
                            <h2 className='xl:text-4xl lg:text-2xl md:text-4xl sm:text-4xl font-bold counter'>350+</h2>
                            <h3 className='xl:text-2xl lg:text-sm md:text-2xl sm:text-2xl text-gray-500'>Projects</h3>
                        </div>
                        <div className='content'>
                            <h2 className='xl:text-4xl lg:text-2xl md:text-4xl sm:text-4xl font-bold counter'>1200+</h2>
                            <h3 className='xl:text-2xl lg:text-sm md:text-2xl sm:text-2xl text-gray-500'>Clients</h3>
                        </div>
                    </div>
                    <div className='content'>
                        <p className='text-gray-500 xl:text-xl lg:text-sm py-10'>Interior decorating is simply outfitting a space with items you like.<br />  For some, the aesthetic  of their home is so important to them</p>
                        <Link to='/about'><button className="btn bg-pink-500 rounded-xl text-white border-0 proud-btn ">Read More</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;