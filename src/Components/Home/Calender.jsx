import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { format } from "date-fns";


const Calender = () => {
  
  const [options, setOptions]=useState({
    adults: 1,
    children: 0,
    room: 1,
  })
  //const [dropDown, setDropDown] = useState(false)
  const [drop, setDrop] = useState(false)
  const [dropDate, setDropDate] = useState(false)

  const Click = (name, operation) => {
    setOptions((prev)=>({
      ...prev,[name]: operation == "i" ? options[name] + 1 : options[name] - 1
    }))
  }

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  

  return (
    <div className='calender'>
      <div className="calen">
        <div className="calen1">
          <p onClick={()=>setDropDate(!dropDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</p>
          <>{ dropDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
          />
          }
          </>
        </div>
        <div className="calen2">
          <p onClick={()=>setDrop(!drop)}>{options.adults} adult {options.children}   children {options.room}   room</p>
          {drop && <div className='called'>
           <div className="call">
            <div className="name">
              <p>Adult</p>
            </div>
            <div className="number">
              <button disabled={options.adults == 1} onClick={()=>Click("adults", "d")}>-</button>
              <p>{options.adults}</p>
              <button onClick={()=>Click("adults", "i")}>+</button>
            </div>
          </div>
          <div className="call">
            <div className="name">
              <p>children</p>
            </div>
            <div className="number">
              <button disabled={options.children == 0} onClick={()=>Click("children", "d")}>-</button>
              <p>{options.children}</p>
              <button onClick={()=>Click("children", "i")}>+</button>
            </div>
          </div>
          <div className="call">
            <div className="name">
              <p>Room</p>
            </div>
            <div className="number">
              <button disabled={options.room == 1} onClick={()=>Click("room", "d")}>-</button>
              <p>{options.room}</p>
              <button onClick={()=>Click("room", "i")}>+</button>
            </div>
          </div>
          </div>
          }
        </div>
        <button>Check Rooms</button>
      </div>
    </div>
    
  )
}

export default Calender