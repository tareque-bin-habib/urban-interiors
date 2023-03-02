import React from 'react';

const ProudServiceImages = ({ images }) => {
    const { image } = images
    return (
        <div>
            <img className='proud-image rounded-2xl	' src={image} alt="" />
        </div>
    );
};

export default ProudServiceImages;