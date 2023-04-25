import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user)

    const HandelLogOut = () => {
        logOut()
        .then(result =>{})
        .catch((error)=> {
            console.log(error.user)
        })
    }
 
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-items'>
            <Link to="/">shop</Link>
            <Link to="/orders">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/singUP">SingUp</Link>
            {
                user && <span style={{color:'white', marginLeft:'10px'}}>{user.email
                } 
                <button onClick={HandelLogOut} className='logOut-btn'>Log Out</button>
                </span>
            }
            </div>
        </nav>
    );
};

export default Header;