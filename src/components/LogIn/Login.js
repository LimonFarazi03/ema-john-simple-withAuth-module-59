import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
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
        <p>New to Ema-john? <Link className="form-link" to='/signup'>Create New Account</Link></p>
      </div>
    </div>
  );
};

export default Login;
