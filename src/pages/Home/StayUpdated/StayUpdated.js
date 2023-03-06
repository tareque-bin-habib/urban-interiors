import React from 'react';
import './StayUpdated.css'

const StayUpdated = () => {
    return (
        <div className='text-center py-20 '>
            <h1 className='text-3xl font-bold proud-head'>Stay Updated</h1>
            <p className='text-gray-500 text-xl py-5 '>Moving into a new home can be one of life's  great joys,<br /> but it can also be a time of  uncertainty, especially</p>
            <div className='flex justify-center gap-5 py-5 form'>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered rounded-xl w-full max-w-xs textInput" />
                </div>
                <div>
                    <button className="btn btn-secondary rounded-xl  bg-pink-500 font-bold text-white border-0 ">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default StayUpdated;