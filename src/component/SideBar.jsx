import React from 'react'
import History from './History.jsx'
import Search from './Search.jsx'
import Hamburger from './Hamburger.jsx'


function SideBar() {

  return (
    <div className='sidebar'>
      <nav id="nav">
                <ul>
                    <Hamburger/>
                    <Search/>
                </ul>
      </nav>
      <History/>
    </div>
  )
}

export default SideBar