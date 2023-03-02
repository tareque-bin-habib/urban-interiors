import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import './Categorie.css'

const Categorie = ({ categorie }) => {
    const { title, intro } = categorie
    return (
        <div className='categorie flex justify-center items-center lg:p-10 md:p-20 sm:p-20'>
            <div className='text-center'>
                <div className='flex justify-center py-5 text-4xl'>
                    <AiOutlineHome className='home-icon text-pink-500'></AiOutlineHome>
                </div>
                <h1 className='text-2xl categorie-head font-bold hover:text-pink-500'>{title}</h1>
                <p className='py-5 text-gray-500 font-bold'>{intro}</p>
                <button className="btn bg-pink-500 text-white border-0">Read more</button>

            </div>
        </div>
    );
};

export default Categorie;