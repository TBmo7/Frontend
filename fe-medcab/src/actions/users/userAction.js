import UserActionTypes from "../users/user.types"

import axiosWithAuth from '../../utils/axiosWithAuth'

export const logInSuccess = ( user, props ) =>  {
    return dispatch => {
      dispatch({
       type: UserActionTypes.LOG_IN_SUCCESS,
    payload: user 
   
      })
  axiosWithAuth()
      .post('/login', {
        username: "user3",
        password: "user3"
      })
      .then(res => { 
        console.log(res.data)
          localStorage.setItem('token', res.data.token)
          // props.history.push('/')
        })
      .catch(err =>{
          console.log(err)
        })
        } 

  };
  
  export const logInFailure = error => ({
    type: UserActionTypes.LOG_IN_FAILURE,
    payload: error
  });
  
  export const emailLogInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_LOG_IN_START,
    payload: emailAndPassword
  });
  
  export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
  });
  
  export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
  });
  
  export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
  });
  
  export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
  });
  
  export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
    
  });
  
  export const signUpSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
  });
  
  export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
  });