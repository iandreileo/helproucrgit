import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="bg-indigo-600 flex justify-between px-10 items-center py-6">
            <div className="flex items-center space-x-2">
                <h1 className="text-white font-bold text-xl cursor-pointer">GITHUB CODER</h1>
            </div>
            <div className="flex items-center space-x-8 font-bold text-white">
                <span className="cursor-pointer text-lg"><Link to="/offers">Offers</Link></span>
                <span className="cursor-pointer text-lg"><Link to="/requests">Requests</Link></span>
            </div>
        </nav>
    )
}

export default Header;