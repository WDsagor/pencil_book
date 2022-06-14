import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../useHooks/useToken";
import Loading from "../Loading/Loading";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
    
  }


  if (loading) {
    return <Loading></Loading>;
    
  }


  return (
    <div className="py-10 ">
      <button onClick={() => signInWithGoogle()} className=" flex justify-center align-middle btn normal-case bg-transparent w-full">
        <FaGoogle className="font-bold text-2xl pr-2 text-green-400"></FaGoogle>
        <span className="text-lg"> Google sigin</span>
      </button>
      </div>
  );
};

export default SocialLogin;
