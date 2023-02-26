import React from 'react';
import { AiOutlineHome } from "react-icons/ai";

const Categorie = ({ categorie }) => {
    const { title, intro } = categorie
    console.log(categorie)
    return (
        <div className=''>
            <div>
                <AiOutlineHome></AiOutlineHome>
                <h1>{title}</h1>
                <p>{intro}</p>
            </div>
        </div>
    );
};

export default Categorie;