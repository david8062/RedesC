import React from 'react'
import './CardProfessor.css'
const CardProfessor = (props) => {
  return (
    <a href={props.link} target = '_blank' ><div className="card__proffesor" style={props.style}>
      <figcaption>
        <img className='perfil__professor' src={props.image}/> 
        <h2 className="name__proffesor">{props.name}</h2>   
      </figcaption>
    </div></a>
  )
}

export default CardProfessor

