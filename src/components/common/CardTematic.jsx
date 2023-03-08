
import React from 'react'
import "./CardTematic.css"
const CardTematic = (props) => {
  return (
    <div className="card__tematic">
        <h5 className="interes__teoricos">{props.tematic}</h5>
    </div>
  )
}

export default CardTematic