// import React, { useState, useEffect } from 'react';

// import axiosWithAuth from '../../../utils/axiosWithAuth'
// import { withRouter } from 'react-router';



// class Login extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             username:'',
//             password:""
//         }
//     }

//     handleSubmit = e =>{
//         e.preventDefault();
       
//         this.setState({
//             username:"",
//             password:""
//         })
//         axiosWithAuth()
//         .post('/login', {
//             username: this.username,
//             password: this.password
//         })
//         .then(res => {console.log(res)
//             localStorage.setItem('token', res.data.token)  
//               })
//         .catch(err => {console.log(err.response)})
//         this.props.history.push('/login')

//     }

//     handleChange = e =>{
//             const {value, name} = e.target;
//             this.setState({ [name]: value })
//     }

 

// render() {
//     return(
//         <div className="sign-in">
//         <h2>Already have an account?</h2>
//         <span>Sign in with your username and Password</span>
//         <form onSubmit={this.handleSubmit}>              
//                 <input 
//                     name='username' 
//                     type='username' 
//                     autoComplete='username' 
//                     onChange={this.handleChange} 
//                     value={this.state.username} placeholder="username" 
//                     required 
//                 /> 

//                 <input 
//                     name='password' autoComplete='current-password' 
//                     type ='password' 
//                     onChange={this.handleChange} 
//                     value={this.state.password}  placeholder="password" 
//                     required 
//                 />
                
//                 <input type="submit" />    
//             </form>
//         </div>
//     )
// }}

// export default withRouter( Login );


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