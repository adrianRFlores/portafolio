import React, { useState } from 'react'
import './SectionSelector.css'

const SectionSelector = ({ callback, colors }) => {

    const [current, setCurrent] = useState(0)

    const handeClick = (val) => {
        setCurrent(val)
        callback(val)
    }

    return (
        <div className="sectionSelector">
            <button 
                className={`sectionBtn ${current === 0 ? 'y' : 'n'}`} 
                onClick={() => {handeClick(0)}}
                style={{backgroundColor: current === 0 ? colors[0] : 'transparent'}}>
                My Work
            </button>
            <button 
                className={`sectionBtn ${current === 1 ? 'y' : 'n'}`} 
                onClick={() => {handeClick(1)}}
                style={{backgroundColor: current === 1 ? colors[0] : 'transparent'}}>
                About Me
            </button>
            <button 
                className={`sectionBtn ${current === 2 ? 'y' : 'n'}`} 
                onClick={() => {handeClick(2)}}
                style={{backgroundColor: current === 2 ? colors[0] : 'transparent'}}>
                Inquiries
            </button>
        </div>
    )
}

export default SectionSelector