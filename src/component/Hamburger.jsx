import React from 'react'

function Hamburger() {
    function handleHamburger(){
        console.log('Search')
      }
  return (
    <li className="nav-items" onClick={handleHamburger}><i className="fa-solid fa-bars"></i></li>
  )
}

export default Hamburger