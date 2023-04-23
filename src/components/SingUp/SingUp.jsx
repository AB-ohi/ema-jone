import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const SingUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)

    const handleSingUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm)

        setError('')
        if (password !== confirm){
            setError('Your password did not match');
            return;
        }
        else if(password.length < 6){
            setError('password must be 6 characters or longer')
        }

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
        })
        .catch(error =>{
            console.log(error.massage);
            setError(error.massage)
        })
    }

    return (
        <div className='from-container'>
            <h2 className='from-title'>Sing UP</h2>
            <form onSubmit={handleSingUp}>
                <div className='from-control'>
                    <div className='input-filed'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className='input-filed'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className='input-filed'>
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                    </div>
                    <p className='text-error'>{error}</p>
                    <button>Sing Up</button>
                    <p>Already have an account? <Link to='/login' style={{color:'#FF9900'}}>Login</Link> </p>
                    <div className='other-sing-in-border'>
                        <div/>
                        <p>or</p>
                        <div/>
                    </div>
                    <button style={{background:'none',border: '1px solid #95A0A7',    display: 'flex',alignItems:'center',justifyContent:'center', marginBottom:'44px'}}><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="20"/>Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

export default SingUp;