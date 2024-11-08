import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const Abut = () => {
  return (
    <div>
      <div className="sit">
        <div className="sit1">
          <h1>About Us</h1>
          <p><Link to='/'>Home</Link> <span>/ About</span></p>
        </div>
      </div>
      <div className="about_us">
        <h1>ABOUT <span>EKO HOTELS & SUITES</span></h1>
        <img src="../hotels/6.jpg" alt="" />
        <div className="about_us_para">
          <p>Eko Hotels & Suites is the most preferred hotel in West Africa and it's all about the right mix! Located in the heart of the Victoria Island and shielded from the hustle and bustle of the Lagos metropolis, we offer our corperate clients andwalk in guests a perfect blend of relaxation, activities, and African tradition, delicacy infusedto meet the highest international standards.</p>
          <p>Eko Hotels & Suites is the most preferred hotel in West Africa and it's all about the right mix! Located in the heart of the Victoria Island and shielded from the hustle and bustle of the Lagos metropolis, we offer our corperate clients andwalk in guests a perfect blend of relaxation, activities, and African tradition, delicacy infusedto meet the highest international standards.</p>
          <p>Eko Hotels & Suites is the most preferred hotel in West Africa and it's all about the right mix! Located in the heart of the Victoria Island and shielded from the hustle and bustle of the Lagos metropolis, we offer our corperate clients andwalk in guests a perfect blend of relaxation, activities, and African tradition, delicacy infusedto meet the highest international standards.</p>
        </div>
        <div className="sion">
          <div className="vision">
            <h2>OUR <span>VISION & MISSION</span></h2>
            <li>We aspire to be the leading and preffered hotel in West Africa</li>
            <li>We aspire to be the leading and preffered hotel in West Africa</li>
            <li>We aspire to be the leading and preffered hotel in West Africa</li>
            <li>We aspire to be the leading and preffered hotel in West Africa</li>
          </div>
          <div className="mission">
            <h2>OUR <span>VALUES</span></h2>
            <li>Commitment to Excellence</li>
            <li>Pursuit of Growth</li>
            <li>Genuine Care</li>
            <li>Genuine Care</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abut