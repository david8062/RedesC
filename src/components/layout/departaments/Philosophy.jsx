import React from 'react'
import './Philosophy.css'
const Philosophy = (props) => {
  return (
    <div className="philosophy__departament">
      {props.children}
    </div>
  )
}

export default Philosophy