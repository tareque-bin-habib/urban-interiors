import React, { useEffect, useState } from 'react';
import ProudServiceImages from './ProudServiceImages';

const ProudServiceImage = () => {
    const [image, setImage] = useState([])

    useEffect(() => {
        fetch('ProudService.json')
            .then(res => res.json())
            .then(data => setImage(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {
                image.map(images => <ProudServiceImages key={images.id} images={images}></ProudServiceImages>)
            }
        </div>
    );
};

export default ProudServiceImage;