import React, { useState } from 'react'
import './Bubble.css'

const Bubble = ({ color }) => {
  const [rand, setRand] = useState(Math.random() * 19 + 1)

  return (
    <span
      className="bubble"
      style={{
        background: color,
        boxShadow: `0 0 0 5px ${color}44, 0 0 50px ${color}, 0 0 100px ${color}`,
        animationDuration: `calc(150s / ${rand})`,
      }}></span>
  )
}

export default Bubble
