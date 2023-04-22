import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-items'>
            <Link to="/">shop</Link>
            <Link to="/orders">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/singUP">SingUp</Link>
            </div>
        </nav>
    );
};

export default Header;