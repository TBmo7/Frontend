import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth'



class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:""
        }
    }



    handleSubmit = e =>{
        e.preventDefault();
        this.setState({
            username:"",
            password:""
        })
        axiosWithAuth()
        .post('/login', {
            username: "user3",
            password: "user3"
        })
        .then(res => {console.log(res)
            localStorage.setItem('token', res.data.token)  
              })
        .catch(err => {console.log(err)})

    }

    handleChange = e =>{
            const {value, name} = e.target;
            this.setState({ [name]: value })
    }

 

    render() {
        return(
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your username and Password</span>

                <form onSubmit={this.handleSubmit}>              
                   <input name='username' type='username' autoComplete='username' onChange={this.handleChange} value={this.state.username} placeholder="username" required /> 
                   <input name='password' autoComplete='current-password' type ='password' onChange={this.handleChange} value={this.state.password}  placeholder="password" required />
                   <input type="submit" />    
                </form>



            </div>
        )
    }
}

export default Login;