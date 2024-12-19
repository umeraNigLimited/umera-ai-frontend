import React from 'react'
import Avatar from './Avatar'
import '../style/Header.css'

function Header() {
  return (
    <div className='header'>
        <h3 style={{color: 'rgba(93,93,93, 0.9)'}}>UMéRA AI</h3>
        <div className='profile-pic'>
        <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size={40} />
        </div>
    </div>
  )
}

export default Header