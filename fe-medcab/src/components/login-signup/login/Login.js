import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../../actions/users/userAction';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';



const Login = ({ loginSuccess }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
  });
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {push} = useHistory()
  const handleSubmit = async event => {
    event.preventDefault();
    // password !== confirmPassword? alert("passwords must match"): ""
    // loginSuccess(userCredentials);

    axiosWithAuth()
            .post('/login', {
                username,
                password
            })
            .then(res => {console.log(res)
                push("/protected")
                localStorage.setItem('token', res.data.token)  

                  })
            .catch(err => {console.log(err.response)})
            // props.history.push('/login')
    
        }

  
const onInputUsername = (e)=>{
    setUsername(e.target.value)
}
const onInputPassowrd = (e)=>{
    setPassword(e.target.value)
}
//   const handleChange = event => {
//     const { name, value } = event.target;

//     // setUserCredentials(
//     //   { ...userCredentials, [name]: value }
//     //   );
//   };

  return (
<div >
 
  <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        value={username}
        onChange={onInputUsername}
        label='Display Name'
        placeholder= "user name"
        required
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={onInputPassowrd}
        label='Password'
        autoComplete='password'
        placeholder= "Password"
        required
      />

    <button type='submit'>Login</button>
  </form>
</div>
);
  }


export default Login;