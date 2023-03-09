import React from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    return (
        <div className='max-w-[1440px] mx-auto min-h-screen'>
            <div className=' pt-20'>
                <h1 className='text-center text-5xl font-bold'>Let's get in touch</h1>
                <p className='text-center text-xl py-5 text-gray-500'>Give us a call or drop by anytime, we endeavour to answer all enquiries <br /> within 24 hours on business days.</p>
            </div>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 text-center py-10'>
                <div>
                    <input type="text" placeholder="Enter your name" className="input input-bordered rounded-xl w-full border-2 max-w-xs" />
                </div>
                <div>
                    <input type="text" placeholder="Enter you phone number" className="input input-bordered rounded-xl border-2 w-full max-w-xs" />
                </div>
                <div>
                    <input type="text" placeholder="Enter your email" className="input input-bordered rounded-xl w-full border-2 max-w-xs" />
                </div>
                <div>
                    <input type="text" placeholder="Subject" className="input input-bordered rounded-xl w-full border-2 max-w-xs" />
                </div>

            </div>
            <div className='text-center'>
                <div>
                    <textarea className="textarea textarea-bordered border-2 rounded-xl py-14 w-2/3" placeholder="Message"></textarea>
                </div>
            </div>
            <div className='flex justify-center pt-10'>
                <Link to='/services'>
                    <button className="btn btn-secondary rounded-xl  bg-pink-500 font-bold text-white border-0 ">Submit now</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactForm;