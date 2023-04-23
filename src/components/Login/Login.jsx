import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='from-container'>
            <h2 className='from-title'>Login</h2>
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
                    <button>Sing Up</button>
                    <p>New to Ema-john? <Link to='/singUp' style={{color:'#FF9900'}}>Sing Up</Link> </p>
                    <div className='other-sing-in-border'>
                        <div/>
                        <p>or</p>
                        <div/>
                    </div>
            <button style={{background:'none',border: '1px solid #95A0A7',display: 'flex',alignItems:'center',justifyContent:'center',marginBottom:'44px'}}><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="20"/>Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;