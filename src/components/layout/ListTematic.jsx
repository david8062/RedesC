import React from 'react'
import './ListTematic.css'
import Search from '../common/Search'
import ViewTematic from '../../utils/functions/ViewTematic'
import CardTematic from '../common/CardTematic'
const ListTematic = () => {
  return (
    <><Search />
    <div className = 'menu__tematic'>
      <ViewTematic>
        <div className="search__tematic">
          <h3 className="tittle__tematic">Temáticas de investigación</h3>
        </div>
        <CardTematic />
      </ViewTematic>
      </div>
    </>

  )
}

export default ListTematic
