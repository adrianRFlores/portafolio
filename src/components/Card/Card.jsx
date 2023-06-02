import React from "react"
import { MouseParallax } from "react-just-parallax"
import './Card.css'

const Card = ({ img, title, desc, url, colors}) => {
    return (
        <div className="cardContainer">
            <img src={img} />
            <h1>{title}</h1>
            <p>{desc}</p>
            <a href={url} style={{color: colors[2]}}>Check it out -&gt;</a>
        </div>
    )
}

export default Card