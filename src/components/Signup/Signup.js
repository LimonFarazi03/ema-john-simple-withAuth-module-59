import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import Glogo from '../../images/g-logo.png'

const Signup = () => {
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">SignUp</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Confirm Password</label>
            <input type="password" name="password" />
          </div>
          <input className="form-submit-btn" type="submit" />
        </form>
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