import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaFacebookF, FaTime } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navba = () => {

  const [log, setLog]=useState(false)
  return (
    <div className='nav'>
      <div className="navbar">
        <div className="logo">
          <Link to="/"><img src="../hotels/logo.jpg" alt="" /></Link>
        </div>
        <div className={ log ? "bars" : "links"}>
          <ul>
            <Link to='/'><li>Home </li></Link>
            <Link to='/meeting-events'><li>Meeting & Banqueting</li></Link>
            <Link to='/recreational-services'><li>Recretional Services</li></Link>
            <Link to='/meeting-events'><li>Events</li></Link>
            <Link to='/gallery'><li>gallery</li></Link>
          </ul>
        </div>
        <div className="icons">
          <button><FaFacebookF /></button>
          <button><FaFacebookF /></button>
          <button><FaFacebookF /></button>
        </div>
        <div className="font">
          <button onClick={()=>setLog(!log)}>{log ? <FaTimes /> : <FaBars />}</button>
        </div>
      </div>
    </div>
  )
}

export default Navba