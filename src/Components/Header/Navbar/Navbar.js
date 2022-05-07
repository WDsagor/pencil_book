import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        to="/inventory"
      >
        Inventory
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      {user ? (
        <NavLink
          onClick={() => handleSignOut()}
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          to="/login"
        >
          Sign Out
        </NavLink>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          to="/Login"
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
