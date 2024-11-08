import React from 'react'
import './home.css'
import { FaArrowRight } from "react-icons/fa6";


const Din = ({dat}) => {
  return (
    <div className='din_div'>
      <div className="dat_img">
        <img src={dat.pic} alt="" />
      </div>
      <div className="dat_head">
        <h2>{dat.head}</h2>
        <p>{dat.sub.slice(0,90)}...</p>
        <button>Read More <span><FaArrowRight /></span></button>
      </div>
    </div>
  )
}

export default Din