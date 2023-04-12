import React from 'react'
import './History.css'
const History = (props) => {
  return (
    <div className="history__department">
      {props.children}
    </div>
  )
}

export default History