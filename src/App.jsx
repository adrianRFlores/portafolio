import React, { useState } from 'react'
import { MouseParallax, ScrollParallax } from 'react-just-parallax' //no me salió a mano asi que tocó
import './App.css'
import Bubble from './components/Bubble/Bubble'
import ColorPicker from './components/ColorPicker/ColorPicker'

function App() {
  const [colors, setColors] = useState(['#4361EE', '#AA73D4', '#662C91'])

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * 3)]
  }

  const populateBG = (amount) => {
    let elems = []
    for (var i = 0; i <= amount; i++) {
      elems.push(<Bubble color={getRandomColor()} />)
    }
    return elems
  }

  const pickerCallback = (arr) => {
    setColors(arr)
  }

  return (
    <>
      <div className="bgContainer">
        <MouseParallax isAbsolutelyPositioned strength={0.025} shouldResetPosition>
          <div className="bgItems">{populateBG(50)}</div>
        </MouseParallax>
      </div>
      <ColorPicker callback={pickerCallback} />
      <ScrollParallax strength={0.6}>
        <div className="titleContainer">
          <h1 className="name">Adrián Flores</h1>
          <div className="separator"  style={{backgroundColor: colors[1]}} />
          <h2 className="personalDesc">Estudiante de Ciencias de la Computación en UVG</h2>
        </div>
      </ScrollParallax>
      <div className="projectContainer">
        <span>s</span>
      </div>
    </>
  )
}

export default App
