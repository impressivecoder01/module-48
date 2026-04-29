// import React from 'react';

import { Link } from "react-router";
import {sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/firebase";
import { useRef, useState } from "react";

const Login = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef();
    const handleLogin = e => {
        e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError('')
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            console.log(res.user)
            setSuccess('Login in successfully done.')
            if(!res.user.emailVerified){
                alert('please verify your email')
            }
            e.target.reset()
        })
        .catch(err => setError(err.message))
    }

    const handleForgetPassword = (e) =>  {
        e.preventDefault()
        const email = emailRef.current.value
        console.log(email)
        sendPasswordResetEmail(auth, email)
        .then(()=> {
            alert('please check your mail')
        })
        .catch(err => console.log(err.message))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <h1 className={`bg-black w-full text-white text-center p-2 rounded-xl`}>Login Form</h1>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin} className="">
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
          name="email" 
          type="email" 
          ref={emailRef} 
          className="input" 
          placeholder="Email" />
          <label className="label">Password</label>
          <input 
          name="password" 
          type="password" 
          className="input" 
          placeholder="Password" />
          <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form> 
        {
            error ? <p className="text-red-400">Input right email and password</p> : success
        }
        <p className="text-xl font-bold">Do not have an account? <Link className="text-green-300 underline" to={`/register`}>Register here.</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;