import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>T-shirt Maniya</h1>
            <nav className='nav-link'>
               <CustomLink to="/">Home</CustomLink>
               <CustomLink to="/orderreview">Order Review</CustomLink>
            </nav>
        </div>
    );
};

export default Header;