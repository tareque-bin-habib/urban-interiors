import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                    <p className="py-6">Urban interiors are the epitome of modernity and style, featuring industrial materials, smart technology, and sleek design elements</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10 ">
                    <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/login'><p>Already have an account? <span className='text-pink-500'>Login</span></p></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-500 border-0 text-white font-bold">Register</button>
                            </div>
                            <div className='pt-10 flex justify-center'>
                                <BsGoogle className='text-2xl cursor-pointer'></BsGoogle>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;