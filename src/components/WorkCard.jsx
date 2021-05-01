import React from 'react'
import './WorkCard.css';

export default function WorkCard({title, description, src, link}) {
    return (
        <div className="WorkCard">
            <img className="WorkCard-img" src={src} alt={title}/>
            <h2>{title}</h2>
            <p className="WorkCard-description">{description}</p>
            <a href={link}>
              <button className="WorkCard-button">
        view
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </button>
      </a>    
        </div>
    )
}
