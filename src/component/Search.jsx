import React from 'react'

function Search() {
    function handleSearch(){
        console.log('Search')
      }
  return (
        <li className="nav-items" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></li>
  )
}

export default Search