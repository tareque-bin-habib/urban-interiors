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
        <div>
            {
                image.map(images => <ProudServiceImages key={images.id} images={images}></ProudServiceImages>)
            }
        </div>
    );
};

export default ProudServiceImage;