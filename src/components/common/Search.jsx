import React from 'react'
import './Search.css'
const Search = ( {busqueda, search, setSearch, searcher } ) => {
  return (
    <div className = "search__navMenu">
      <input value=  {search} onChange = {searcher} type = "text" placeholder = {busqueda}  />
      <div className="icon__search"></div>      
    </div>
  )
}

export default Search