import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Recrt = ({creat}) => {
  return (
    <div className='rec_8'>
      <div className="recrt">
        <img src={creat.img} alt="" />
      </div>
      <div className="recr8">
        <Link to={`/recreational/${creat.id}`}>
          <h2>{creat.tit}</h2>
        </Link>
        <p>{creat.para.slice(0,120)}...</p>
      </div>
    </div>
  )
}

export default Recrt