import React from 'react'
import './WorkCard.css';

export default function WorkCard({title, description, src, link1, link2}) {
    return (
        <div className="WorkCard">
            <img className="WorkCard-img" src={src} alt={title}/>
            <h2>{title}</h2>
            <p className="WorkCard-description">{description}</p>
            <a href={link1}>
              <button className="WorkCard-button">
        GitHub
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </button>
      </a>
      <a href={link2}>
              <button className="WorkCard-button">
        Website
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </button>
      </a>    
        </div>
    )
}
