import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };



    return (
        <nav className = 'navBar'>
            <h3>J O</h3>
            <ul className = 'nav-links'>
                <Link style = {navStyle} to= "/About"> 
                    <li>About</li>
                </Link>
                <Link style = {navStyle} to= "/"> 
                    <li>Home</li>
                </Link>
                
            </ul>
        </nav>
    );
}

export default Nav;