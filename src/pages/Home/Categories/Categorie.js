import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Categorie.css'

const Categorie = ({ categorie }) => {
    const { title, intro } = categorie
    return (
        <div className='categorie flex justify-center items-center lg:p-10 md:p-20 sm:p-20 rounded-lg' data-aos="fade-down">
            <div className='text-center' >
                <div className='flex justify-center py-5 text-4xl'>
                    <AiOutlineHome className='home-icon text-pink-500'></AiOutlineHome>
                </div>
                <h1 className='text-2xl categorie-head font-bold hover:text-pink-500'>{title}</h1>
                <p className='py-5 text-gray-500 font-bold'>{intro}</p>
                <Link to='/about'><button className="btn bg-pink-500 text-white rounded-xl border-0">Read more</button></Link>

            </div>
        </div>
    );
};

export default Categorie;