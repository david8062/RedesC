import React from 'react'
import '../pages/InvestigationLines.css'
import Menu from '../layout/Menu'
import Aside from '../layout/Aside'
import ListProfessorDepartament from "../../utils/functions/ListProfessorDepartament"
import { Link } from 'react-router-dom'
import BtnContinue from "../common/BtnContinue"
const Departaments = () => {
  return (
    <><Menu />
      <section className='main-section-InvestigationLines'>
        {/* <ListTematic /> */}
        <div className="description-faculty">
          <h4 className="subtittle-investigation-lines">Composición de la</h4>
          <h1 className="tittle-investigation-lines">Facultad de <br></br><strong>Ciencias Sociales</strong></h1>
          <h3 className="departament-area">Areas y Departamentos</h3>
          <h1 className="professors">7</h1>
          <p className='description-professor'>La facultad de ciencias sociales cuenta con 120 profesores de los cuales el x% <br></br>Son doctores en sus áreas respectivas,<br></br>
            el otro x% esta en proceso de obtenerlo</p>
          <Link to = '/selectdepartament' >
          <BtnContinue />
          </Link>
        </div>
        <div className="list-professor">
          <Aside>
           <ListProfessorDepartament></ListProfessorDepartament>
          </Aside>
        </div>
      </section></>
  )
}

export default Departaments