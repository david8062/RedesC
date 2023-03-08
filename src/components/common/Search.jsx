import React from 'react'
import './Search.css'
const Search = (props) => {
  return (
    <div className = "search__navMenu">
      <input type = "text" placeholder = {props.busqueda} />
      <div className="icon__search"></div>      
    </div>
  )
}

export default Search