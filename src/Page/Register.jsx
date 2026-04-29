// import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/firebase";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    // e.target.reset()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked
    const passwordPatter = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPatter.test(password)) {
      console.log("passs", terms);
      setError("pass must be long and have to uppercase and a lowercase");
      return;
    }

    setError("");
    setSuccess(false);
    if(!terms){
      setError('Please Accept Our Terms and Conditions')
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setSuccess(true);
        e.target.reset();
      })
      .catch((err) => setError(err.message));
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="" onSubmit={(e) => handleRegister(e)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleShowPassword}
                    className="btn btn-xs absolute right-3 top-2"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <label className="label">
                    <input
                      type="checkbox"
                      name="terms"
                      className="checkbox"
                    />
                    Accept Our Terms and Conditions
                  </label>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
              {success && (
                <p className="text-2xl text-green-600">
                  Account created successfully
                </p>
              )}
              {error && <p className="text-2xl text-red-600">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
