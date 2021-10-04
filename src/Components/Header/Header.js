import React from 'react';
import { NavLink } from 'react-router-dom';
// nav link for routing
const Header = () => {
    return (
        <div className="bg-green-800 shadow-xl">
         
           <nav className="text-center ml-100 text-2xl py-5 text-white font-semibold font-sans">
                <NavLink to ="/home" className="mr-10 hover:bg-green-500">Home</NavLink>
                <NavLink to ="/about" className="mr-10 hover:bg-green-500">About</NavLink>
                <NavLink to ="/services" className="mr-10 hover:bg-green-500">Services</NavLink>
                <NavLink to ="/teach" className="mr-10 hover:bg-green-500">Teach On Study Buddies</NavLink>
           </nav>
        </div>
    );
};

export default Header;