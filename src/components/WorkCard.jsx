import React from 'react'
import './WorkCard.css';

export default function WorkCard({title, description, src}) {
    return (
        <div>
            <img className="WorkCard-img" src={src} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button class="pulse">View</button>
        </div>
    )
}
