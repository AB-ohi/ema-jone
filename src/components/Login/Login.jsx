import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {

    const [error,setError] = useState('');
    const {signIn} = useContext(AuthContext)
    const Navigate = useNavigate()

    const handelToSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        setError('');

        if(password.length < 6){
            setError('password mast be 6 characters or longer')
            return;
        }

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user
            console.log(result.user)
            form.reset();
            Navigate('/')
        })
        .catch(error =>{
            setError(error.massage)
        })
    }

    return (
        <div className='from-container'>
            <h2 className='from-title'>Login</h2>
            <form onSubmit={handelToSignIn}>
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
                    <p className='text-error'>{error}</p>
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