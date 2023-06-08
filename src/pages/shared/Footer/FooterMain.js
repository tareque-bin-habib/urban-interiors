import React from 'react';
import { Link } from 'react-router-dom';
import './FooterTop.css'
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

const FooterMain = () => {
    return (
        <div className='footer-top p-10'>
            <footer className="footer max-w-[1440px] mx-auto  border-b-2 p-10 ">
                <div>
                    <span className=" text-white font-bold text-3xl">Services</span>
                    <Link className="link text-gray-500 text-xl link-hover">Branding</Link>
                    <Link className="link text-gray-500 text-xl link-hover">Design</Link>
                    <Link className="link text-gray-500 text-xl link-hover">Marketing</Link>
                    <Link className="link text-gray-500 text-xl link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="text-white font-bold text-3xl">Company</span>
                    <Link className="link text-gray-500 text-xl link-hover">About us</Link>
                    <Link className="link text-gray-500 text-xl link-hover">Contact</Link>
                    <Link className="link text-gray-500 text-xl link-hover">Jobs</Link>
                    <Link className="link text-gray-500 text-xl link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="text-white font-bold text-3xl">Legal</span>
                    <Link className="link text-gray-500 text-xl link-hover">Terms of use</Link>
                    <Link className="link text-gray-500 text-xl link-hover">Privacy policy</Link>
                    <Link className="link text-gray-500 text-xl link-hover">Cookie policy</Link>
                </div>
                <div className='news'>
                    <span className="text-white font-bold text-3xl">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
            <div>
                <p className='text-center text-white text-xl pt-10'> © 2020 Home Interior. All rights reserved. Design by <span className='text-teal-500'>Urban Interior</span></p>
                {/* <div>
                    <Link to='/'><BsFillArrowUpSquareFill className='bg-teal-500 text-4xl'></BsFillArrowUpSquareFill></Link>
                </div> */}
            </div>
        </div>
    );
};

export default FooterMain;