import React from 'react'
import './InvestigationLines.css'
import Menu from '../layout/Menu'
import Aside from '../layout/Aside'
import CardProfessor from '../common/CardProfessor'
import ListProfessor from '../../utils/functions/ListProfessor'
import BtnContinue from '../common/BtnContinue'
import { Link } from 'react-router-dom'
const InvestigationLines = () => {
  return (
    <><Menu />
      <section className = 'Main-section__InvestigationLines'>
        <div className = "description__faculty">
          <h4 className = "subtittle">Composición de la</h4>
          <h1 className = "tittle">Facultad de <br></br>Ciencias Sociales</h1>
          <h3 className = "departament__area">Profesores</h3>
          <h1 className = "professors">120</h1>
          <p className ='description__professor'>La facultad de ciencias sociales cuenta con 120 profesores de los cuales el x% <br></br>Son doctores en sus áreas respectivas,<br></br>
            el otro x% esta en proceso de obtenerlo</p>
          <Link to = '/departaments'>
          <BtnContinue />
          </Link>
        </div>

        <div className="list__professor">
          <Aside>
            <ListProfessor>
              <CardProfessor />
              </ListProfessor>
                
          </Aside>
        </div>
      </section></>
  )
}

export default InvestigationLines