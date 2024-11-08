import React from 'react'
import { meet } from '../data'

const Gall = () => {
  return (
    <div>
      {
        meet.map((i)=>{
          return(
            <div key={i.id}>
              <img src={i.image} alt="" width={200} />
              <p>{i.head}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Gall