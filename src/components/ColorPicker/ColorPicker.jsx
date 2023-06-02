import React, { useState } from 'react'
import './ColorPicker.css'

const ColorPicker = ({ callback }) => {
  let colors = [
    ['#662C91', '#AA73D4', '#4361EE'],
    ['#25527A', '#1295A7', '#E73B25'],
	['#102942', '#105D72', '#B1D711']
  ]

  const [current, setCurrent] = useState(0)
	const [active, setActive] = useState(false)

  return (
		<div className="ColorsHolder">
			<button className={`toggler ${active ? 'y' : 'n'}`} onClick={() => setActive(!active)}>Change color scheme</button>
			<div className={`PickerContainer ${active ? 'down' : 'up'}`}>
				{colors.map((element, x) => {
					return (
						<button
							className={`scheme ${current === x ? 'active' : 'inactive'} ${active ? 'down' : 'up'}`}
							onClick={() => {callback(colors[x]); setCurrent(x)}}>
							{element.map((color) => {
								return (
									<div
										className="color"
										style={{ background: color }}
									/>
								)
							})}
						</button>
					)
				})}
			</div>
		</div>
  )
}

export default ColorPicker
