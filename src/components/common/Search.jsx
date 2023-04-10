import React from 'react'
import './Search.css'
const Search = ( {busqueda } ) => {
  return (
    <div className = "search__navMenu">
      <input  type = "text" placeholder = {busqueda}  />
      <div className="icon__search"></div>      
    </div>
  )
}

export default Search