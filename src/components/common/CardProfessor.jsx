import React from 'react'
import './CardProfessor.css'
const CardProfessor = (props) => {
  return (
    <a href = {props.link} target = '_blank' ><div className = "card-proffesor" style = {props.style}>
      <figcaption>
        <img className = 'perfil-professor' src = {props.image} /> 
        <h2 className = "name-proffesor" >{props.name}</h2>   
      </figcaption>
    </div></a>
  )
}

export default CardProfessor

