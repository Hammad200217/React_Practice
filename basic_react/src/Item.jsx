import React from 'react'
import './Item.css'

function Item({title, price}) {
  return (
    <div className="item">
        <h1>{title}</h1>
        <h5>{price}</h5>        
    </div>
  )
}

export default Item