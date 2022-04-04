import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-5'>
            <nav>
                <Link to="/" className='menu'>Home</Link>
                <Link to="/reviews" className='menu'>Reviews</Link>
                <Link to="/dashboard" className='menu'>Dashboard</Link>
                <Link to="/blogs" className='menu'>Blogs</Link>
                <Link to="/about" className='menu'>About</Link>
            </nav>
        </div>
    );
};

export default Header;