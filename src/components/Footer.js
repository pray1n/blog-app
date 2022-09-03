import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer (){
 
  
  return (
    <div className="footerflex">
        <NavLink className="link" to="/">contact</NavLink>
        <NavLink className="link" to="/countries">contact</NavLink>
        <NavLink className="link" to="/cities">contact</NavLink>
    </div>

    
  )
}

export default Footer