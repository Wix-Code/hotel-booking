import React, { useState } from 'react'
import './Sign.css'

const Signin = () => {
  const [names, setNames] = useState({
   fname :'',
   lname : '',
   password : '',
  })

  const change = (e) => {
   setNames((prev)=>({...prev, [e.target.name]:e.target.value}))

   console.log(names)
  }
  return (
    <div className='sign'>
      <div className="signin">
        <h1>SIGN IN</h1>
        <div className="name">
          <label htmlFor="Fname">First Name</label>
          <input type="text" name='fname' placeholder='First name' onChange={change}/>
        </div>
        <div className="name">
          <label htmlFor="Fname">Last Name</label>
          <input type="text" name='lname' placeholder='Last name' onChange={change}/>
        </div>
        <div className="name">
          <label htmlFor="Fname">Password</label>
          <input type="text" name='password' placeholder='Password' onChange={change}/>
        </div>
        <div className="sub_btn">
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Signin