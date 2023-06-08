import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft } from 'react-icons/fa';
import './OurExperience.css'

const OurExperience = () => {
    return (
        <div className='max-w-[1440px] mx-auto py-20 ' data-aos="fade-down">
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div className='flex justify-center single-part'>
                    <div>
                        <h3 className='text-gray-500 text-sm font-bold'>AN ENCHANTING DREAM HOME.</h3>
                        <h1 className='text-4xl font-bold pt-5'>We Have 10+ Years <br /> Of Experience.</h1>
                        <p className=' text-gray-500 font-semibold py-5'>Urban Interior provides the  best designable <br /> furniture and  home decor since 2010.  We <br /> provide updated furniture for  your <br /> home and decor  your home  interior.<br /> We always  work for our valueable <br /> customer as a first priority.</p>
                        <Link to='/services'>
                            <button className="btn  rounded-xl  bg-teal-500 font-bold text-white border-0 ">Read more</button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center single-part'>
                    <img className='text-bold xl:w-96 lg:w-96 md:w-96 ex-img' src="https://demo.w3layouts.com/demos_new/template_demo/06-06-2020/home-interior-liberty-demo_Free/779565612/web/assets/images/about.jpg" alt="" />
                </div>
                <div className='flex justify-center'>
                    <div>
                        <FaQuoteLeft className='text-gray-500 text-5xl'></FaQuoteLeft>
                        <p className='text-xl font-semibold pt-5 '><i>Moving into a new home can be one of life's great joys, but it can also be a time of uncertainty, especially when it comes to decorating.</i></p>
                        <h1 className='text-4xl text-teal-500 font-bold pt-10 border-b-2 pb-5'>Urban Interior</h1>
                        <p className='text-gray-500 font-bold text-xl pt-5'><i>The best interior solution.</i></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurExperience;