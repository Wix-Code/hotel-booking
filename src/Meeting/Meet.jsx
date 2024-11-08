import React from 'react'
import './meeting.css'
import { Link } from 'react-router-dom'

const Meet = ({met}) => {
  return (
    <div className='met'>
      <div className="meet2">
        <img src={met.image} alt="" />
      </div>
      <div className="meet3">
        <h2>{met.head}</h2>
        <p>{met.wit}</p>
        <Link to={`/meeting/${met.id}`}>
          <button>view details</button>
        </Link>
      </div>
    </div>
  )
}

export default Meet