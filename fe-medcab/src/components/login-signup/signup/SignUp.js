import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../../actions/users/userAction';


const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
  });


  const handleSubmit = async event => {
    event.preventDefault();

    // if (password !== confirmPassword) {
    //   alert("Passwords must match");
    //   return;
    // }

    signUpStart(userCredentials);


  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials(
      { ...userCredentials, [name]: value }
      );
  };
console.log(userCredentials); 
  return (
<div className="signup-wrapper">
  <h1>I do not have an account</h1>
  <span>Sign up with your User Name and password</span>
  <form className='sign-up-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        value={userCredentials.username}
        onChange={handleChange}
        label='Display Name'
        placeholder= "user name"
        required
      />
      <input
        type='password'
        name='password'
        value={userCredentials.password}
        onChange={handleChange}
        label='Password'
        autoComplete='password'
        placeholder= "Password"
        required
      />

    <button type='submit'>SIGN UP</button>
  </form>
</div>
);
};

export default connect(
  null,
{signUpStart})(SignUp);