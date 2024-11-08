import React from 'react'
import { meet } from '../data'

const Gal = () => {
  return (
    <div>
      {
        meet.map((i)=>{
          return(
            <div key={i.id}>
              <p>{i.wit}</p>
              <img src={i.image} alt="" width={200} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Gal