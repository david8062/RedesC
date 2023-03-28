import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SelectDepartament.css'
import Menu from '../layout/Menu'
import Boton from '../common/BtnContinue'
/*importacion de departamentos*/
import Aside from '../../components/layout/Aside'
import Cepol from '../layout/departaments/Cepol'
import History from '../layout/departaments/History'
import Languaje from '../layout/departaments/Languaje'
import Philosophy from '../layout/departaments/Philosophy'
import Psychology from "../layout/departaments/Psychology"
import Sociology from "../layout/departaments/Sociology"
import Anthropology from '../layout/departaments/Anthropology'
/*importacion de componentes comunes*/
import { showDepartament } from '../../utils/functions/showDepartament'
import BtnContinue from '../common/BtnContinue'
const SelectDepartament = () => {
  const [anthropologyVisible, setAnthropologyVisible] = useState(false);
  return (
    <><><Menu></Menu>
      <section className="main-section-select-departament">
        <div className="left-menu-departament">
          <h3 className="explorer-departaments-area">Explora los departamentos y áreas</h3>
          <h4 className="subtittle-search-tematic">Quisiera explorar las líneas de investigación de: </h4>
          <ul className='menu-departament'>
            {/* Antropologia */}
            <li className='departament-antropology'>Antropología
              <div className="boton">
                <input type="checkbox" name="" id="btn-switch" onChange={() => showDepartament(anthropologyVisible, setAnthropologyVisible)} />
                <label htmlFor="btn-switch" className='lbl-siwtch'></label>
              </div>
            </li>
            {/* Cepol */}
            <li className='cepol'>Ciencia Politica
              <div className="boton">
                <input type="checkbox" name="" id="btn-switch-cepol" />
                <label htmlFor="btn-switch-cepol" className='lbl-siwtch-cepol'></label>
              </div></li>
            {/* Filosofia */}
            <li className='departament-philosophy'>Filosofia
              <div className="boton">
                <input type="checkbox" name="" id="btn-switch-philosophy" />
                <label htmlFor="btn-switch-philosophy" className='lbl-siwtch-philosophy'></label>
              </div></li>
            {/* Historia */}
            <li className='departament-history'>Historia y Geografia
              <div className="boton">
                <input type="checkbox" name="" id="btn-switch-history" />
                <label htmlFor="btn-switch-history" className='lbl-siwtch-history'></label>
              </div></li>
            {/* Lenguas */}
            <li className='departament-languajes'>Lengua y cultura
              <div className="boton">
                <input type="checkbox" name="" id="btn-switch-languajes" />
                <label htmlFor="btn-switch-languajes" className='lbl-siwtch-languajes'></label>
              </div></li>
            {/* Sociologia */}
            <li className='departament-sociology'>Sociología
              <div className="boton">
                <input type="checkbox" name="" id="btn-switch-sociology" />
                <label htmlFor="btn-switch-sociology" className='lbl-siwtch-sociology'></label>
              </div></li>
            {/* Psicologia */}
            <li className='departament-psychology'>Psicología
              <div className="boton">
                <input type="checkbox" name="" id="btn-switch-psychology" />
                <label htmlFor="btn-switch-psychology" className='lbl-siwtch-psychology'></label>
              </div></li>
          </ul>
        </div>
        <div className="list-professor">
          <Aside>
            <Cepol />
            <History />
            <Languaje />
            <Philosophy />
            <Psychology />
            <Sociology />
            {anthropologyVisible && <Anthropology />}
          </Aside>
        </div>
      </section></><Link to = '/listtematic'>
          <BtnContinue />
          </Link>
      </>
      

  )
}

export default SelectDepartament

