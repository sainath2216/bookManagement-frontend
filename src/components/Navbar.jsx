import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/add-book">Add Book</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;