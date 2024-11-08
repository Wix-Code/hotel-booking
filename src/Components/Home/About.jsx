import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='ab_t'>
       <h1 className='head'>WELCOME TO <span>EKO HOTELS & SUITES</span></h1>
      <div className="abt">
        <div className="img">
          <img src="../hotels/6.jpg" alt="" />
        </div>
        <div className="side">
          <h3>About us</h3>
          <h1>The Most Preferred Hotel in West Africa</h1>
          <p>Eko Hotels & Suites is the most preferred hotel in West Africa, and it is all about the right mix! Located in the heart of Victoria Island, we offer our clients a perfect blend of business & leisure amenities with dining and recreational options delicately infused in one amazing space. We crown all these with services that meet the highest international standards.</p>

          <p>Overlooking the new Eko Atlantic City and Atlantic Ocean, it is just a 10-minute drive to the City Centre and only 45minutes away from the Airport.</p>

          <p>Our hotels are designed for your comfort and convenience. Your security is our primary concern and you will find our customer care second to none</p>

          <Link to="/about"><button>Learn more</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About