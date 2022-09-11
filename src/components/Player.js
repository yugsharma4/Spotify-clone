import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import "./Player.css"
import Footer from './Footer'
import { useStateValue } from './DataLayer'

const Player = ({spotify}) => {

  return (
    <div className='player'>
      <div className='player__body'>
      

        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body />
        {/* Footer */}
        
     </div>
     <Footer />
    </div>
  )
}

export default Player
