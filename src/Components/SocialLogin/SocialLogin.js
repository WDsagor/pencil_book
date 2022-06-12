import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
    
  }


  if (loading) {
    return <Loading></Loading>;
    
  }


  return (
    <div className="social-btn-area">
      <button onClick={() => signInWithGoogle()} className="social-btn">
        <FaGoogle className="google"></FaGoogle>
        <span> Google sigin</span>
      </button>
      <button className="social-btn">
        <FaFacebookSquare></FaFacebookSquare> <span> Facebook sigin</span>
      </button>
    </div>
  );
};

export default SocialLogin;
