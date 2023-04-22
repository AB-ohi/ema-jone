import React from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';


const SingUp = () => {
    return (
        <div className='from-container'>
            <h2 className='from-title'>Sing UP</h2>
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
                    <div className='other-sing-in-border'>
                        <div/>
                        <p>or</p>
                        <div/>
                    </div>
                    <button style={{background:'none',border: '1px solid #95A0A7'}}><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="20"/>Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

export default SingUp;