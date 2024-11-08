import React from 'react'
import './recreate.css'
import Reat from './Reat'
import { Link } from 'react-router-dom'
import { product } from '../data'

const Recreational = () => {

 
  return (
    <div>
      <div className="sit">
        <div className="sit1">
        <h1>Recreational Service</h1>
        <p><Link to='/'>Home</Link> <span>/ Recreational Services</span></p>
        </div>
      </div>
      <div className="sit_div">
        <h1>Recreational <span>Services</span></h1>
        <div className="sit_data">
          {
            product.map((dat)=>{
              return(
                <div className="sit_dat">
                  <Reat key={dat.id} dat={dat} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Recreational