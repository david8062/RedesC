import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
const HomePage = () => {
    return (
        <section className="main-section">
            <div className="frame-left">
                <h3 className='sub-tittle'>Redes de conocimiento</h3>
                <h1 >Facultad de <br></br><strong>Ciencias Sociales</strong></h1>
                <h3>Descubre y conoce la facultad de la <br></br>
                    Universidad de los Andes a trávez de las conexiones que<br></br>
                    se tejen a travéz de la investigación y el conocimiento</h3>
            </div>
            <div className="frame-right">
                <h3>Explora la facultad a travéz de las redes que se tejen entre:</h3>
                <Link to="/investigationLines">
                    <div className="card-lines">
                        <h3>Líneas de investigacion</h3>
                        <p>Explora cómo se conectan profesores y profesoras de
                            diferentes departamentos en torno a su investigación</p>
                        <div className="icon-line"></div>
                    </div>
                </Link>
                <Link to="departaments">
                    <div className="card-tematic">
                        <h3>Temáticas de investigación</h3>
                        <p>Explora las temáticas de trabajo que unen a los profesores y profesoras de diferentes departamentos</p>
                        <div className="icon-tematic"></div>
                    </div>
                </Link>
            </div>
            <div className="logo"></div>
        </section>
    )
}

export default HomePage