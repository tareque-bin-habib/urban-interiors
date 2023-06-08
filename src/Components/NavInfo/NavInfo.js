import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import './NavInfo.css'

const NavInfo = () => {
    return (
        <div className='border-b-2 border-gray-200 lg:block navInfo'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='flex justify-between h-8'>
                    <div className='flex items-center gap-10'>
                        <div className='border-l-2 border-gray-200 pl-5'>
                            <FaFacebookF className='text-teal-500'></FaFacebookF>
                        </div>
                        <div className='border-l-2 border-gray-200 pl-5'>
                            <AiOutlineTwitter className='text-teal-500'></AiOutlineTwitter>
                        </div>
                        <div className='border-l-2 border-gray-200 pl-5'>
                            <BsInstagram className='text-teal-500'></BsInstagram>
                        </div>
                        <div className='border-l-2 border-gray-200 pl-5'>
                            <AiFillLinkedin className='text-teal-500'></AiFillLinkedin>
                        </div>
                    </div>
                    <div className='flex items-center justify-around gap-10'>
                        <div className='flex justify-around items-center gap-2 border-r-2 border-gray-200 pr-5'>
                            <div>
                                <BsFillTelephoneFill className='text-teal-500 text-sm'></BsFillTelephoneFill>
                            </div>
                            <div>
                                <p className='text-gray-500 text-sm	'>+142 4523678</p>
                            </div>
                        </div>
                        <div className='flex justify-around items-center gap-2 border-r-2 border-gray-200 pr-5'>
                            <div>
                                <BsStopwatch className='text-teal-500 text-sm' ></BsStopwatch>
                            </div>
                            <div>
                                <p className='text-gray-500 text-sm	'>Mon - Fri: 10:00 - 18:00 </p>
                            </div>
                        </div>
                        <div className='flex justify-around items-center gap-2 border-r-2 border-gray-200 pr-5'>
                            <div>
                                <AiOutlineMail className='text-teal-500 text-sm	'></AiOutlineMail>
                            </div>
                            <div>
                                <p className='text-gray-500 text-sm	'>info@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavInfo;