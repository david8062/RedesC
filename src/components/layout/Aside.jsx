import React from 'react'
import './Aside.css'
const Aside = (props) => {
  return (
    <div className="departaments"> 
        {props.children}        
    </div>
  )
}

export default Aside