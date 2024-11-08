import React from 'react'
import './App.css'
import Rout from './Rout'
import Footer from './Footer/Footer'
import Navba from './Navbar/Navba'

const App = () => {

  return (
    <div className='dig'>
      <Navba />
      <Rout />
      <Footer />
    </div>
  )
}

export default App