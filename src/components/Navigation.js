import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaMicrophone } from 'react-icons/fa';
import { SlSettings } from 'react-icons/sl';
import logo from '../images/coins.png';

const Nav = () => (
  <nav className="main-nav">
    <div className="nav-left">
      <NavLink to="/">
        <FaArrowAltCircleLeft className="icons" />
      </NavLink>
      {/* <p> 2023</p> */}
    </div>
    <div className="nav-center">
      <img src={logo} alt="Crypto logo" width="50px" />
      <p> Crypto Currency Tracker</p>
    </div>
    <div className="nav-right">
      <NavLink to="/"><FaMicrophone className="icons" /></NavLink>
      <NavLink to="/"><SlSettings className="icons" /></NavLink>
    </div>
  </nav>
);

export default Nav;
