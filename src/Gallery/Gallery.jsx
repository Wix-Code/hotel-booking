import React, { useState } from 'react'
import './gallary.css'
import Gall from './Gall'
import Gal from './Gal'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

const Gallery = () => {

  const [change, setChange] = useState(false);
  return (
    <div className='gallery'>
      <h1>come</h1>
      <FaBars onClick={()=>setChange(false)} />
      <FaTimes onClick={()=>setChange(!false)} />
      {
        change ? 
        <Gall />
        :
        <Gal />
      }
    </div>
  )
}

export default Gallery