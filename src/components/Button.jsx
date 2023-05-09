import React from 'react'
import '../App.css'

const Button = ({getFood}) => {
  return (
    <div>
        <button className='btn' onClick={getFood}>What is for dinner</button>
    </div>
  )
}

export default Button