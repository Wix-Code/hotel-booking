import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { meet } from '../data'

const SinglePage = () => {

  const {id} = useParams()

  const item = meet.find((item)=> item.id === parseInt(id))

  return (
    <div>
      <div>
      <div className="sit">
        <div className="sit1">
          <h1>{item.head}</h1>
          <p><Link to='/'>Home</Link> <span>/ {item.head}</span></p>
        </div>
      </div>
      <div className="sec">
        <h1>{item.head}</h1>
        <div className="sec1">
          <img src={item.image} alt="" />
          <div className="sec2">
            <p>{item.wit}</p>
            <p>{item.para}</p>
            <p>{item.par}</p>
            <p>{item.pa}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SinglePage