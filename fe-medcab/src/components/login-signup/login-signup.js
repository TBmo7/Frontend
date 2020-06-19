import React from 'react';
import Login from './login/Login';
import SignUp from "../login-signup/signup/SignUp"

const LoginSignup = () =>{
    return (
        <div className="login-signup-wrapper">
           <h1> Welcome to your Med Cabinet! </h1>
           <Login/>
        </div>
    )
}
export default LoginSignup;