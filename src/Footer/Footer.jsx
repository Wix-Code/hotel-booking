import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="foot">
        <div className="foo">
          <div className="foot1">
            <Link to='/'><li>Home </li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/recreational-services'><li>Recretional</li></Link>
            <Link to='/meeting-events'><li>Events</li></Link>
            <Link to='/gallery'><li>gallery</li></Link>
            <Link to='/contact'><li>Contact Us</li></Link>
          </div>
          <div className="foot2">
            <img src="../hotels/foot.png" alt="" />
            <div className="foot2_div">
              <FaFacebookF />
              <p>Ezialaukwu Lorji, Aboh Mbaise, Imo State, Nigeria.</p>
            </div>
            <div className="foot2_div">
              <FaFacebookF />
              <p>Ezialaukwu Lorji, Aboh Mbaise, Imo State, Nigeria.</p>
            </div>
            <div className="foot2_div">
              <FaFacebookF />
              <a href="tel:+2348126829146">+2348126829146</a>
              <a href="tel:+2349034716652">+2349034716652</a>
            </div>
          </div>
          <div className="foot3">
            <h4>Newsletter</h4>
            <p>Subscribe to our email newsletter to receive updates and news.</p>
            <div className="inp">
              <input type="text" placeholder='Email address'/>
              <button>SA</button>
            </div>
            <div className="foot_icons">
              <span><FaFacebookF /></span>
              <span><FaFacebookF /></span>
              <span><FaFacebookF /></span>
              <span><FaFacebookF /></span>
            </div>
          </div>
        </div>
        <hr />
        <div className="foot4">
          <p>Copyright @ 2024 Eko Hotels & Suites</p>
        </div>
      </div>
    </div>
  )
}

export default Footer