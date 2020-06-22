import React, { useState } from 'react';
import { connect } from 'react-redux';

import axiosWithAuth from "../../../utils/axiosWithAuth";

import { signUpStart } from '../../../actions/users/userAction';


const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { username, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ username, email, password });

    axiosWithAuth()
    .post('/register',{
      username: "",
      email:"",
      password:""
    })
    .then(res =>{
    localStorage.setItem('token', res.data.payload)
    })
    .catch(err =>{console.log(err)})
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signup-wrapper">
      <h1>I do not have an account</h1>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          label='Display Name'
          placeholder= "Name"
          required
        />
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          placeholder= "Email"
          required
        />
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          autoComplete='password'
          placeholder= "Password"
          required
        />
        <input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          autoComplete='password'
          placeholder= "Confirm Password"
          required
        />
        <button type='submit'>SIGN UP</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);