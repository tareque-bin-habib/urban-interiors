import React from 'react';
import ProudServiceImage from '../ProudServiceImage/ProudServiceImage';
import './ProudService.css'

const ProudService = () => {
    return (
        <div className="max-w-[1440px] mx-auto 2xl:py-20 xl:py-20 lg:py-20 md:py-5 sm:py-5">
            <div className='lg:flex md:flex-row justify-between items-center '>
                <div className='flex justify-center items-center md:pb-10 sm:pb-10'>
                    <div>
                        <h1 className="font-bold pb-5 proud-head ">We are very proud of the <br />
                            service we provide and stand <br />
                            by every product we carry</h1>
                        <p className='text-gray-500 xl:text-xl lg:text-sm pb-10 '>Interior decorating is simply outfitting a space with items you like.<br />  For some, the aesthetic  of their home is so important to them</p>
                        <button className="btn bg-pink-500 rounded-xl text-white border-0 proud-btn">Read more</button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <ProudServiceImage></ProudServiceImage>
                </div>
            </div>
        </div>
    );
};

export default ProudService;