import React from 'react'
import './home.css'
import Firstslide from './Firstslide';
import Calender from './Calender';


const First = () => {
  return (
    <div className='first'>
      <Firstslide />
      <Calender />
    </div>
  )
}

export default First