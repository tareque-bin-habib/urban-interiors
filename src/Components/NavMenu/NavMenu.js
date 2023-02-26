import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css'

const NavMenu = () => {

    const menuItems = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/about'>About</Link></li>
        <li className='font-bold'><Link to='/services'>Services</Link></li>
        <li className='font-bold'><Link to='/contact'>Contact</Link></li>

    </>

    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                            <li className='font-bold'><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-2xl font-bold text-pink-500">Urban Interior</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}


                    </ul>
                </div>
                <div className="navbar-end logedin">
                    <Link to='/login'><button className="btn btn-secondary bg-pink-500 font-bold text-white border-0">Login</button></Link>
                </div>
            </div>
        </div >
    );
};

export default NavMenu;