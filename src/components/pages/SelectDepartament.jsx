import React from 'react'
import './SelectDepartament.css'
/*importacion de componentes*/
import Aside from '../../components/layout/Aside'
import Cepol from '../layout/departaments/Cepol'
import History from '../layout/departaments/History'
import Languaje from '../layout/departaments/Languaje'
import Philosophy from '../layout/departaments/Philosophy'
import Psychology from "../layout/departaments/Psychology"
import Sociology from "../layout/departaments/Sociology"
import Anthropology from '../layout/departaments/Anthropology'
const SelectDepartament = () => {
    return (
      <section className="search__tematic">
      <div className="left__menu">
        <h3 className='explorer__departaments__area'>Explora los departamentos y áreas</h3>
        <h4 className='subtittle__search__tematic'>Quisiera explorar las líneas de investigación de: </h4>
        <ul className='menu__departament'>
          {/* Antropologia */}
          <li className='departament__antropology'>Antropología
            <div className="boton">
              <input type="checkbox" name="" id="btn-switch"/>
              <label htmlFor="btn-switch" className='lbl-siwtch' ></label>
            </div>
          </li>
          {/* Cepol */}
          <li className='cepol'>Ciencia Politica
            <div className="boton">
              <input type="checkbox" name="" id="btn-switch-cepol"/>
              <label htmlFor="btn-switch-cepol" className='lbl-siwtch-cepol'></label>
            </div></li>
          {/* Filosofia */}
          <li className='departament__philosophy'>Filosofia
            <div className="boton">
              <input type="checkbox" name="" id="btn-switch-philosophy"/>
              <label htmlFor="btn-switch-philosophy" className='lbl-siwtch-philosophy'></label>
            </div></li>
          {/* Historia */}
          <li className='departament__history'>Historia y Geografia
            <div className="boton">
              <input type="checkbox" name="" id="btn-switch-history"/>
              <label htmlFor="btn-switch-history" className='lbl-siwtch-history'></label>
            </div></li>
          {/* Lenguas */}
          <li className='departament__languajes'>Lengua y cultura
            <div className="boton">
              <input type="checkbox" name="" id="btn-switch-languajes" />
              <label htmlFor="btn-switch-languajes" className='lbl-siwtch-languajes'></label>
            </div></li>
          {/* Sociologia */}
          <li className='departament__sociology'>Sociología
            <div className="boton">
              <input type="checkbox" name="" id="btn-switch-sociology"/>
              <label htmlFor="btn-switch-sociology" className='lbl-siwtch-sociology'></label>
            </div></li>
          {/* Psicologia */}
          <li className='departament__psychology'>Psicología
            <div className="boton">
              <input type="checkbox" name="" id="btn-switch-psychology"/>
              <label htmlFor="btn-switch-psychology" className='lbl-siwtch-psychology'></label>
            </div></li>
        </ul>        
      </div>
      <Aside>
      <Cepol />
            <History />
            <Languaje />
            <Philosophy />
            <Psychology />
            <Sociology />
            <Anthropology/>
      </Aside>
     
    </section>
  )
}

export default SelectDepartament