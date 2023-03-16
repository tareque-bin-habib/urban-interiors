import React from 'react';


const MakeDifferent = () => {
    return (
        <div className='bg-gray-100'>
            <div className="max-w-[1440px] mx-auto 2xl:py-20 xl:py-20 lg:py-20 md:py-5 sm:py-5" data-aos="fade-down"  >
                <div className='lg:flex md:flex-row justify-around items-center '>
                    <div className='flex justify-center items-center md:pb-10 sm:pb-10' >
                        <div>
                            <h1 className="font-bold pb-5 proud-head ">What makes us different?</h1>
                            <p className='text-gray-500 xl:text-xl lg:text-sm pb-10 '>Moving into a new home can be one of life's  great joys,<br /> but it can also be a time of  uncertainty, especially<br /> when it comes to decorating.</p>
                            <div className='flex justify-between items-center text-gray-500 py-10'>
                                <div>
                                    <ol type='square'>
                                        <li>Wall painting designs</li>
                                        <li>Personalized design services</li>
                                        <li>Home Decorating</li>
                                    </ol>
                                </div>
                                <div>
                                    <ul>
                                        <li>Interior design Solutions</li>
                                        <li>Interior Decoration</li>
                                        <li>Stylish living home</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center' >
                        <iframe className='youTube' width="700" height="350" src="https://www.youtube.com/embed/sssrfVJUdFk" title="Inside A Hidden Architect’s Own Family Home That Reveals A Gorgeous Haven" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeDifferent;