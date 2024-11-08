import React from 'react'
import './recreate.css'
import { Link } from 'react-router-dom'

const Reat = ({dat}) => {
  return (
    <div className='sit_up'>
      <div className="sit_img">
        <img src={dat.image} alt="" />
      </div>
      <div className="sit_write">
        <h2>{dat.head}</h2>
        <p>{dat.wit.slice(0,70)}...</p>
        <Link to={`/recreational/${dat.id}`}>
          <span>View More</span>
        </Link>
      </div>
    </div>
  )
}

export default Reat