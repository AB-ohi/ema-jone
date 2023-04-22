import React from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';


const SingUp = () => {
    return (
        <div className='from-container'>
            <h2 className='from-title'>Please singUP</h2>
            <form>
                <div className='from-control'>
                    <div className='input-filed'>
                        <label>Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className='input-filed'>
                        <label>Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className='input-filed'>
                    <label>Confirm Password</label>
                    <input type="password" name="password" id="" required />
                    </div>
                    <button>Sing Up</button>
                    <p>Already have an account? <Link to='/login'>Login</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default SingUp;