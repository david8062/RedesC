import React from 'react'
import './ListTematic.css'
import Search from '../common/Search'
import ViewTematic from '../../utils/functions/ViewTematic'
import CardTematic from '../common/CardTematic'
import Aside from '../layout/Aside'
import ListProfessorDepartament from "../../utils/functions/ListProfessorDepartament"
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
      <div className="list-professor">
          <Aside>
           <ListProfessorDepartament></ListProfessorDepartament>
          </Aside>
        </div>
      </div>
    </>

  )
}

export default ListTematic
