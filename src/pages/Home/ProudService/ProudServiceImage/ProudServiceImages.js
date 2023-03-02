import React from 'react';

const ProudServiceImages = ({ images }) => {
    const { image } = images
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default ProudServiceImages;