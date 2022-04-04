import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav-style'>
           
           <p><Link to={'Home'}>HOME</Link></p>
           <p><Link to={'Reviews'}>REVIEWS</Link></p>
           <p><Link to={'Dashboard'}>DASHBORD</Link></p>
           <p><Link to={'Blogs'}>BLOGS</Link></p>
           <p><Link to={'About'}>ABOUT</Link></p>
            
        </div>
    );
};

export default Navbar;