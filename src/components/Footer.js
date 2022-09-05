import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer () {
  return (
    <div className="footerflex">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/countries">Countries</NavLink>
        <NavLink className="link" to="/cities">Cities</NavLink>
    </div>
  )
}

export default Footer;