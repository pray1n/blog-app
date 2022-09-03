import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer (){
 
  
  return (
    <div className="footerflex">
        <NavLink className="link" to="/">About</NavLink>
        <NavLink className="link" to="/countries">Contact</NavLink>
        <NavLink className="link" to="/cities"></NavLink>
    </div>

    
  )
}

export default Footer