import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Recreational from './Recreational/Recreational'
import Meeting from './Meeting/Meeting'
import Abut from './About/Abut'
import Gallery from './Gallery/Gallery'
import SinglePage from './Single/SinglePage'
import SingleRec from './SingleRec/SingleRec'
import ScrollTop from './ScrollTop/ScrollTop'



const Rout = () => {
  return (
    <div>
      <ScrollTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/recreational-services' element={<Recreational />}/>
        <Route path='/meeting-events' element={<Meeting />}/>
        <Route path='/meeting/:id' element={<SinglePage />}/>
        <Route path='/recreational/:recreateId' element={<SingleRec />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/about' element={<Abut />}/>
      </Routes>
    </div>
  )
}

export default Rout