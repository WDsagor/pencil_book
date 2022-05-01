import React from "react";
import signup from "../../../asset/images/Signup.png";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaFacebookSquare,
  FaGoogle,
} from "react-icons/fa";
import "./Signup.css";

const Signup = () => {
  const userIcon = <FaUser></FaUser>;
  return (
    <div className="signup-page">
      <div className="signup-area">
        <h1>Please signup</h1>
        <from className="signup-from">
          <div className="input-fild">
            <label>Full name</label>
            <span>
              <FaUser className="icon"></FaUser>
              <input type="text" placeholder="Enter your full name" />
            </span>
          </div>
          <div className="input-fild">
            <label>Email</label>
            <span>
              <FaEnvelope className="icon"></FaEnvelope>
              <input type="email" placeholder="eaxmple@eaxmple.com" />
            </span>
          </div>
          <div className="input-fild">
            <label>Password</label>
            <span>
              <FaLock className="icon"></FaLock>
              <input
                type="password"
                placeholder="Enter your password min 6 digit"
              />
            </span>
          </div>
          <div className="input-fild">
            <label>Confirm password</label>
            <span>
              <FaLock className="icon"></FaLock>
              <input type="password" placeholder="Confirm password" />
            </span>
          </div>
          <div className="button">
            <input type="submit" value="Sign Up" />
          </div>
        </from>
        <p>
          Have an account ?{" "}
          <Link className="link" to="/login">
            {" "}
            Login
          </Link>
        </p>
        <div className="social-btn-area">
          <button className="social-btn">
            <FaGoogle className="google"></FaGoogle>
            <span> Google sigin</span>
          </button>
          <button className="social-btn">
            <FaFacebookSquare></FaFacebookSquare> <span> FaceBook sigin</span>
          </button>
        </div>
      </div>
      <div className="signup-img">
        <img src={signup} alt="" />
      </div>
    </div>
  );
};

export default Signup;
