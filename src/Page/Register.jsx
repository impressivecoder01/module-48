// import React from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Components/firebase';
import { useState } from 'react';
const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value 
        const password = e.target.password.value 
        setError('')
        setSuccess(false)
        createUserWithEmailAndPassword( auth,email, password)
        .then(res => {
            console.log(res.user)
            setSuccess(true)
            e.target.reset()
        })
        .catch(err => setError(err.message))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="" onSubmit={(e)=> handleRegister(e)}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </fieldset>
        {
            success && <p className='text-2xl text-green-600'>Account created successfully</p>
        }
        {
            error && <p className='text-2xl text-red-600'>{error}</p>
        }
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;