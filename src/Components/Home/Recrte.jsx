import React from 'react'
import './home.css'
import Recrt from './Recrt'

const Recrte = () => {
  const create = [
    {
      id : 1,
      img : 'hotels/1.jpg',
      tit: 'Swimming Pool',
      para: 'Our well-equipped gym with steaming rooms are accessible to our in-house fit fam junkies, and comes with an available instructor. Access to the gym for outside guests are only available to members only.'
    },
    {
      id : 2,
      img : 'hotels/1.jpg',
      tit: 'Swimming Pool',
      para: 'Our well-equipped gym with steaming rooms are accessible to our in-house fit fam junkies, and comes with an available instructor. Access to the gym for outside guests are only available to members only.'
    },
    {
      id : 3,
      img : 'hotels/1.jpg',
      tit: 'Swimming Pool',
      para: 'Our well-equipped gym with steaming rooms are accessible to our in-house fit fam junkies, and comes with an available instructor. Access to the gym for outside guests are only available to members only.'
    },
    {
      id : 4,
      img : 'hotels/1.jpg',
      tit: 'Swimming Pool',
      para: 'Our well-equipped gym with steaming rooms are accessible to our in-house fit fam junkies, and comes with an available instructor. Access to the gym for outside guests are only available to members only.'
    },
    {
      id : 5,
      img : 'hotels/1.jpg',
      tit: 'Swimming Pool',
      para: 'Our well-equipped gym with steaming rooms are accessible to our in-house fit fam junkies, and comes with an available instructor. Access to the gym for outside guests are only available to members only.'
    },
    {
      id : 6,
      img : 'hotels/1.jpg',
      tit: 'Swimming Pool',
      para: 'Our well-equipped gym with steaming rooms are accessible to our in-house fit fam junkies, and comes with an available instructor. Access to the gym for outside guests are only available to members only.'
    },
  ]
  return (
    <div className='recreate'>
      <h1 className='head'>Recreational <span>services</span></h1>
      <div className="create">
        {
          create.map((creat)=>{
            return (
              <div className="creat">
                <Recrt key={creat.id} creat={creat}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recrte