import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
    <div className='navbar-container'>
        <div className='navbar-left-align'>
            <h1 className='logo'><Link className='navbar-logo-link' to='/'>Bookstore CMS</Link></h1>
            <ul className='navbar-ul'>
                <li className='navbar-ul-li'><Link className='navbar-li-item' to='/books'>Books</Link></li>
                <li className='navbar-ul-li'><Link className='navbar-li-item' to='/categories'>Category</Link></li>
            </ul>
        </div>
        {/* avatar */}
        <div className='navbar-right-align'>

        </div>
    </div>
);

export default Navbar