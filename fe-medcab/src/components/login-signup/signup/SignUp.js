import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../../actions/users/userAction';


const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });

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
          name='displayName'
          value={displayName}
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
          placeholder= "Password"
          required
        />
        <input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
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