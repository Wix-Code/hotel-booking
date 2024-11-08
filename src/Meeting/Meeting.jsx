import React from 'react'
import './meeting.css'
import Meet from './Meet'
import { Link } from 'react-router-dom'
import { meet } from '../data'

const Meeting = () => {
 
  return (
    <div>
      <div className="sit">
        <div className="sit1">
          <h1>Meetings & Events</h1>
          <p><Link to='/'>Home</Link> <span>/ Meetings & Events</span></p>
        </div>
      </div>
      <div className="meet">
          {
            meet.map((met)=>{
              return(
                <div className="meet1" key={met.id}>
                  <Meet key={met.id} met={met} />
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Meeting