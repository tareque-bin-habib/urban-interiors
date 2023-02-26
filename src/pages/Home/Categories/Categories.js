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
        <div className='max-w-[1440px] mx-auto'>
            <div>
                {
                    categories.map(categorie => <Categorie key={categorie.id} categorie={categorie} ></Categorie>)
                }
            </div>
        </div>
    );
};

export default Categories;