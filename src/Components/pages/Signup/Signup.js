import signup from "../../../asset/images/Signup.png";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./Signup.css";
import SocialLogin from "../../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";

const Signup = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate()

  if (loading) {
    return <Loading></Loading>;
  }
  
  if (error) {
    toast(error);
    return;
  }
  const handelSignup = async (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirmPass.value;

    if (
      confirmPass.length >= 6 &&
      password === confirmPass &&
      password.length >= 6
    ) {
      await createUserWithEmailAndPassword(email, password);
      toast.success(
        "Registration complete please see email, confirm varification link ",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        }
      );
      return navigate('/login')
    }
    if (confirmPass.length < 6 && password.length < 6) {
      toast.error("Please enter passwor minimum 6 character");
    }
    if (password !== confirmPass) {
      toast.error("Pawsswprd not match");
    }
    event.target.reset();

  };
  return (
    <div className="signup-page">
      <div className="signup-area">
        <h1>Please signup</h1>
        <form onSubmit={handelSignup} className="signup-from">
          <div className="input-fild">
            <label>Full name</label>
            <span>
              <FaUser className="icon"></FaUser>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
              />
            </span>
          </div>
          <div className="input-fild">
            <label>Email</label>
            <span>
              <FaEnvelope className="icon"></FaEnvelope>
              <input
                type="email"
                name="email"
                placeholder="eaxmple@eaxmple.com"
                required
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
                placeholder="Enter your password min 6 digit"
                required
              />
            </span>
          </div>
          <div className="input-fild">
            <label>Confirm password</label>
            <span>
              <FaLock className="icon"></FaLock>
              <input
                type="password"
                name="confirmPass"
                placeholder="Confirm password"
                required
              />
            </span>
          </div>
          <div className="button">
            <input type="submit" value="SignUp" />
          </div>
        </form>

        <p>
          Have an account ?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
      <div className="signup-img">
        <img src={signup} alt="" />
      </div>
    </div>
  );
};

export default Signup;
