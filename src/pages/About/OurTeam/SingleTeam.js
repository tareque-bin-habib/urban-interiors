import React from 'react';

const SingleTeam = ({ single }) => {
    const { image, name, designation } = single
    console.log(single)
    return (
        <div className=' flex justify-center'>
            <div className="card card-compact xl:w-80 lg:w-80 md:w-80 sm:w-72  bg-base-100 shadow-xl">
                <img className='center h-80' src={image} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className=' text-gray-500'>{designation}</p>

                </div>
            </div>
        </div >
    );
};

export default SingleTeam;