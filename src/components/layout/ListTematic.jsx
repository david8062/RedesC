import React from 'react'
import './ListTematic.css'
import Search from '../common/Search'
import ViewTematic from '../../utils/functions/ViewTematic'
import CardTematic from '../common/CardTematic'
const ListTematic = () => {
  return (
    <div className="main__selection-SearchTematic">
      <div className="search__tematic">
        <h3 className="tittle__tematic">Temáticas de investigación</h3>
      </div>
      <Search />


      <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>I</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li>M</li>
            <li>N</li>
            <li>O</li>
            <li>P</li>
            <li>Q</li>
            <li>R</li>
            <li>S</li>
            <li>T</li>
            <li>U</li>
            <li>V</li>
            <li>W</li>
            <li>X</li>
            <li>Y</li>
            <li>Z</li>
        </ul>

      <ViewTematic>
        <CardTematic />
      </ViewTematic>
    </div>

  )
}

export default ListTematic
