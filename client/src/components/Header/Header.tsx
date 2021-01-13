import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => (
  <div className="Header">
    <NavLink to="/login" >Login</NavLink>
    <NavLink to="/register" >Register</NavLink>
    <NavLink to="/main" >Main</NavLink>
  </div>
);

export default Header;
