import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './AllService.css'

const AllService = ({ service }) => {
    const { image, name, desc } = service
    return (
        <div className=' flex justify-center'>
            <div className="card card-compact xl:w-80 lg:w-80 md:w-80 sm:w-72 service  bg-base-100 shadow-xl" data-aos="fade-down">
                <img className='center h-80' src={image} alt="Shoes" />
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="card-title font-bold">{name}</h2>
                            <p className=' text-gray-500'>{desc}</p>
                        </div>
                        <div>
                            <AiOutlineArrowRight className='text-2xl font-bold text-pink-500 cursor-pointer'></AiOutlineArrowRight>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllService;