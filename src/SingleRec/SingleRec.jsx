import React from 'react'
import './singlerec.css'
import { Link, useParams } from 'react-router-dom'
import { product } from '../data'

const SingleRec = () => {
  const {recreateId} = useParams()

  const item = product.find((item)=> item.id === parseInt(recreateId))
  return (
    <div>
      <div className="sit">
        <div className="sit1">
          <h1>Swimming Pool</h1>
          <p><Link to='/'>Home</Link>  <Link to="/recreational-services">/ Recreational</Link> <span>/ Meetings & Events</span></p>
        </div>
      </div>
      <div className="sec">
        <h1>Swimming pool</h1>
        <div className="sec1">
          <img src={item.image} alt="" />
          <div className="sec2">
            <button>Details</button>
            <p>{item.wit}</p>
            <h3>Opening Time: <span>Monday – Sunday (7am – 8pm)</span></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleRec