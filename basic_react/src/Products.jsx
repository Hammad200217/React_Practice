import React from 'react'
import './App.css'

function Products({title, price, features, features2}) {
 
  return (
    <div>
      <h1> Name: {title} </h1>
      <h5> Price: {price}</h5>
      <h6>{features}</h6>
      <h6>{features2.b}</h6>
    </div>
  )
}

export default Products