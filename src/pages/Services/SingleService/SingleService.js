import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './SingleService.css'
import { AiOutlineUser } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';

const SingleService = () => {
    const service = useLoaderData()
    const { person, image, name, desc, mainDesc, price } = service

    return (
        <div>
            <div className='single-service'>
                <div className='flex justify-center items-center single-banner-content'>
                    <Link to='/services'><BiArrowBack className='text-3xl text-white font-bold mr-5 pointer'></BiArrowBack></Link>
                    <h1 className='text-4xl text-white text-center font-bold'>{name}</h1>

                </div>
            </div>
            <div className='max-w-[1440px] mx-auto py-20'>
                <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2    gap-20'>
                    <div>
                        <h1 className='text-2xl font-bold'>{desc}</h1 >
                        <div className='pt-5 flex gap-4'>
                            <AiOutlineUser className='text-2xl'></AiOutlineUser>
                            <h1 className='font-bold'>{person}</h1>
                        </div>
                        <p className='pt-5'>{mainDesc}</p>
                        <div className='flex gap-4 pt-5'>
                            <p className='font-bold text-2xl'><span>Price:</span> {price}$</p>
                        </div>

                        <Link>
                            <button className="btn btn-secondary rounded-xl  bg-pink-500 font-bold mt-5 text-white border-0 ">Order</button>
                        </Link>
                    </div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleService;