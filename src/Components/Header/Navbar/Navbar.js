import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "nav-link")} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "nav-link")} to='/inventory'>Inventory</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "nav-link")} to='/dashboard'>Dashboard</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "nav-link")}  to='/Login'>Login</NavLink>
        </nav>
    );
};

export default Navbar;