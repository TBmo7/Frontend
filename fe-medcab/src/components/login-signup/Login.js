import React, { useState, useEffect } from 'react';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:""
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.setState({
            email:"",
            password:""
        })

    }

    handleChange = e =>{
            const {value, name} = e.target;
            this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and Password</span>

                <form onSubmit={this.handleSubmit}>              
                   <input name='email' type='email' handleChange={this.handleChange} value={this.state.email} placeholder="email" required/> 
                   <input name='password' type ='password' handleChange={this.handleChange} value={this.state.password}  placeholder="password" required/>
                   <input type="submit" />    
                </form>

            </div>
        )
    }
}

export default Login;