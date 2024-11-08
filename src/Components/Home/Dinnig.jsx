import React from 'react'
import './home.css'
import Din from './Din'
import { din } from '../../data'

const Dinnig = () => {
  
  return (
    <div className='dining'>
      <h1 className='head'>EKO <span>DINNING</span></h1>
      <div className="din">
        {
          din.map((dat)=>{
            return (
              <div className="dine">
                <Din key={dat.id} dat={dat}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Dinnig