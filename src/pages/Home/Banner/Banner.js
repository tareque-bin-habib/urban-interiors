import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/slide1.jpg'
import banner2 from '../../../images/slide3.jpg'
import banner3 from '../../../images/slide4.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} alt='banner' className="w-full banner-img" />
                    <div className='overlay flex justify-center items-center '>
                        <div>
                            <div>
                                <h1 className='text-5xl banner-head font-bold text-center text-white pb-10'>Good Design for Stylish Living<br /> Make your home Modern</h1>
                                <div className='flex justify-center'>
                                    <Link to='/services'>
                                        <button className="btn btn-secondary rounded-xl  bg-pink-500 font-bold text-white border-0 ">Our Services</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} alt='banner' className="w-full banner-img" />
                    <div className='overlay flex justify-center items-center '>
                        <div>
                            <div>
                                <h1 className='text-5xl banner-head font-bold text-center text-white pb-10'>Browse style and get Inspired<br /> Home decoration Services</h1>
                                <div className='flex justify-center'>
                                    <Link to='/services'>
                                        <button className="btn btn-secondary rounded-xl  bg-pink-500 font-bold text-white border-0 ">Our Services</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} alt='banner' className="w-full banner-img" />
                    <div className='overlay flex justify-center items-center '>
                        <div>
                            <div>
                                <h1 className='text-5xl banner-head font-bold text-center text-white pb-10'>Get your Personalized Interior &<br /> Home design services</h1>
                                <div className='flex justify-center'>
                                    <Link to='/services'>
                                        <button className="btn btn-secondary rounded-xl  bg-pink-500 font-bold text-white border-0 ">Our Services</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;