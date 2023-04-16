import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <h1 className="main-heading">Contact Manager</h1>
      <ul className="menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu-item highlight" : "menu-item"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addContact"
            className={({ isActive }) =>
              isActive ? "menu-item highlight" : "menu-item"
            }
          >
            Add Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
