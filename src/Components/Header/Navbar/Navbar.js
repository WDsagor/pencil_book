import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink,} from "react-router-dom";
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
        HOME
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        to="/inventory"
      >
        INVENTORY
      </NavLink>
      {
        user && <>
         <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          to="/addItem"
        >
          ADD ITEM 
        </NavLink>
         <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          to="/myItem"
        >
          MY ITEM
        </NavLink>
        
        </>
      }
      {user ?
      ( <NavLink
          onClick={() => handleSignOut()}
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          to="/login"
        >
          LOG OUT
        </NavLink>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          to="/Login"
        >
          LOGIN 
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
