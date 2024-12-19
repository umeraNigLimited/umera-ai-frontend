import React from 'react'
import '../style/Main.css'
import SideBar from './SideBar'
import Dashboard from './Dashboard'

function Main() {
  return (
    <div className='main'>
    <SideBar/>
    <Dashboard/>
    </div>
  )
}

export default Main