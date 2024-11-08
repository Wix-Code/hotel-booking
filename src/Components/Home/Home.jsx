import React from 'react'
import First from './First'
import About from './About'
import Dinnig from './Dinnig'
import Recrte from './Recrte'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <First />
      <About />
      <Recrte />
      <Dinnig />
    </div>
  )
}

export default Home