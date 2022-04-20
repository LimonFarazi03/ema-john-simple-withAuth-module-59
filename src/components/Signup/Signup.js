import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import Glogo from '../../images/g-logo.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)

  const handleEmailBlur = (event) =>{
    setEmail(event.target.value);
    // console.log(email)
  }
  const handlePasswordBlur = (event) =>{
    setPassword(event.target.value);
    // console.log(password)
  }
  const handleConfirmPasswordBlur = (event) =>{
    setConfirmPassword(event.target.value);
    // console.log(confirmPassword)
  }
  // On Submit
  const handleCreateUser = (event) =>{
    event.preventDefault();
    if(password !== confirmPassword){
      setError("Your password did't same")
      return
    }
    if(password < 6){
      setError("Password will be 6 character or longer")
      return
    }
    createUserWithEmailAndPassword(email, password)
  }
  if(user){
    navigate('/')
  }

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">SignUp</h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" required/>
          </div>
          <div className="input-group">
            <label htmlFor="email">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" required/>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required/>
          </div>
          <input className="form-submit-btn" type="submit" value='Sign Up' />
        </form>
        <p style={{color:'red'}}>{error}</p>
        {/* <p style={{color:'red'}}>{error}</p> */}
        <p className="signInOut">Already have an account? <Link className="form-link" to='/login'>Login</Link></p>
        <div className="connect-google">
          <img src={Glogo} alt="Google-logo"/>
          <p>Connect With Google</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;