import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Glogo from '../../images/g-logo.png'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error
  ] = useSignInWithEmailAndPassword(auth);
  const handleEmailBlur = (event) =>{
    setEmail(event.target.value);
    // console.log(email)
  }
  const handlePasswordBlur = (event) =>{
    setPassword(event.target.value);
    // console.log(password)
  }
  // On Submit
  const handleCreateUser = (event) =>{
    event.preventDefault();
    signInWithEmailAndPassword(email,password);
  }

  if(user){
    navigate('/shop')
  }

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" required/>
          </div>
          <div className="input-group">
            <label htmlFor="email">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" required/>
          </div>
          <input className="form-submit-btn" type="submit" value='Log In'/>
          <p style={{color:'red'}}>{error?.message}</p>
        </form>
        <p className="signInOut">New to Ema-john? <Link className="form-link" to='/signup'>Create New Account</Link></p>
        <div className="connect-google">
          <img src={Glogo} alt="Google-logo"/>
          <p>Connect With Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
