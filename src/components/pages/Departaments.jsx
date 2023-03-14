import React from 'react'
import Menu from '../layout/Menu'
import Aside from '../layout/Aside'
import Cepol from '../layout/departaments/Cepol'
import History from '../layout/departaments/History'
import Languaje from '../layout/departaments/Languaje'
import Philosophy from '../layout/departaments/Philosophy'
import Psychology from "../layout/departaments/Psychology"
import Sociology from "../layout/departaments/Sociology"
import Anthropology from '../layout/departaments/Anthropology'
import BtnContinue from "../common/BtnContinue"
const Departaments = () => {
  return (
    <><Menu />
      <section className='Main-section__InvestigationLines'>
        {/* <ListTematic /> */}
        <div className="description__faculty">
          <h4 className="subtittle">Composición de la</h4>
          <h1 className="tittle">Facultad de <br></br>Ciencias Sociales</h1>
          <h3 className="departament__area">Areas y Departamentos</h3>
          <h1 className="professors">7</h1>
          <p className='description__professor'>La facultad de ciencias sociales cuenta con 120 profesores de los cuales el x% <br></br>Son doctores en sus áreas respectivas,<br></br>
            el otro x% esta en proceso de obtenerlo</p>
          <BtnContinue />
        </div>
        <div className="list__professor">
          <Aside>
            <Cepol />
            <History />
            <Languaje />
            <Philosophy />
            <Psychology />
            <Sociology />
            <Anthropology/>
          </Aside>
        </div>
      </section></>
  )
}

export default Departaments