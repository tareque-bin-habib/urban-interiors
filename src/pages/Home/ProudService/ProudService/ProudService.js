import React from 'react';
import ProudServiceImage from '../ProudServiceImage/ProudServiceImage';
import './ProudService.css'

const ProudService = () => {
    return (
        <div className="max-w-[1440px] mx-auto py-20">
            <div className='lg:flex md:flex-row justify-between items-center '>
                <div>
                    <h1 className="font-bold pb-5 proud-head ">We are very proud of the <br />
                        service we provide and stand <br />
                        by every product we carry</h1>
                    <p className='text-gray-500 text-xl pb-10 '>Interior decorating is simply outfitting a space with items you like.<br />  For some, the aesthetic  of their home is so important to them</p>
                    <button className="btn bg-pink-500 text-white border-0 text-xl lg:block md:hidden">Read more</button>
                </div>
                <div>
                    <ProudServiceImage></ProudServiceImage>
                </div>
            </div>
        </div>
    );
};

export default ProudService;