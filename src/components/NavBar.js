import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import  logo from './logo.svg';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} className="App-logo" alt="logo"></img>
           
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Circle
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/userGrid"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                users
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink
                exact
                to="/notFound"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Page 4
              </NavLink>
            </li>
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
