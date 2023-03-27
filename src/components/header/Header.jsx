import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <h1 className="main-heading">Contact Manager</h1>
      <ul className="menu">
        <li>
          <NavLink to="/" className="menu-item" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/addContact" className="menu-item">
            Add Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
