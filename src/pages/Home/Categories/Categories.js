import React, { useEffect, useState } from 'react';
import Categorie from './Categorie';


const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('Categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='max-w-[1440px] mx-auto py-20' data-aos="fade-up ">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 '>
                {
                    categories.map(categorie => <Categorie key={categorie.id} categorie={categorie} ></Categorie>)
                }
            </div>
        </div>
    );
};

export default Categories;