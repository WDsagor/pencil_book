import React from "react";
import "./Login.css";
import loginImg from "../../../asset/images/login.png";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  const handelLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (error) {
      return toast.error(`${error.code}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      
    }
    
    if(!error){
      if (email !== "" && password !== "") {
        await signInWithEmailAndPassword(email, password);
        toast.success("Login Success", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
  
    }
    
    event.target.reset();
  };

  return (
    <div className="login-page">
      <div className="login-area">
        <h1>Please Login</h1>
        <form onSubmit={handelLogin} className="login-from">
          <div className="input-fild">
            <label>Eamil</label>
            <span>
              <FaEnvelope className="icon"></FaEnvelope>
              <input
                type="email"
                name="email"
                placeholder="eaxmple@eaxmple.com"
              />
            </span>
          </div>
          <div className="input-fild">
            <label>Password</label>
            <span>
              <FaLock className="icon"></FaLock>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </span>
          </div>
          <div className="button">
            <input type="submit" value="Log in" />
          </div>
        </form>
        <p>
          Are you new?
          <Link className="link" to="/signup">
            Create account
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
      <div className="login-img">
        <img src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
