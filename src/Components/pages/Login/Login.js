import React from "react";
import "./Login.css";
import loginImg from "../../../asset/images/login.png"
import {FaEnvelope, FaLock} from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-area">
        <h1>Please Login</h1>
        <form className="login-from">
          <div className="input-fild">
            <label>Eamil</label>
            <span><FaEnvelope className='icon'></FaEnvelope><input type="email" placeholder="eaxmple@eaxmple.com" /></span>
          </div>
          <div className="input-fild">
            <label>Password</label>
            <span><FaLock className='icon'></FaLock><input type="password" placeholder="Enter your password" /></span>
          </div>
          <div className="button">
          <input type="submit" value='Log in' />
          </div>
        </form>
        <p>
          Are you new? <Link className="link" to="/signup"> Create account</Link>
        </p>
      </div>
      <div className="login-img">
          <img src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
