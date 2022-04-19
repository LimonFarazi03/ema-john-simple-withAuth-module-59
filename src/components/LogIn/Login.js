import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Glogo from '../../images/g-logo.png'

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Password</label>
            <input type="password" name="password" />
          </div>
          <input className="form-submit-btn" type="submit" />
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
