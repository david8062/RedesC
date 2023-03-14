import React from 'react'
import './CardProfessor.css'
const CardProfessor = (props) => {
  return (
    <div className="card__proffesor">
      <figcaption>
        <img className='perfil__professor' src={props.image} />
        <h2 className="name__proffesor">{props.name}</h2>   
        <h1>{props.departamet}</h1>     
      </figcaption>
    </div>
  )
}

export default CardProfessor