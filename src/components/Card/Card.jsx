import React, { useSate } from "react"
import './Card.css'

const Card = ({ img, title, desc, url, colors}) => {
    return (
        <div className="cardContainer">
            <img src="https://placekitten.com/g/1920/1080" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <a href={url} style={{color: colors[2]}}>Check it out -&gt;</a>
        </div>
    )
}

export default Card