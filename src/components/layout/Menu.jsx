import React from 'react'
import './Menu.css'
import Search from '../common/Search'
const Menu = () => {
  return (
    <div className="menu__navBar">
        <div className="menu__icon"></div>
        <h5>Redes de conocimiento | Facultad de Ciencias Sociales</h5>
        <div className="search__menu">
          <Search>           
          </Search>
        </div>
    </div>
  )
}

export default Menu