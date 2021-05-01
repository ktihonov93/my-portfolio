import React from 'react'
import WorkCard from './WorkCard'
import "./Work.css"

export default function Work() {
    return (
        <div className="work">
            <h2 className="work-header">My Recent Works</h2>
            <WorkCard link="https://github.com/ktihonov93/mosaic-art" src="https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009_960_720.jpg" title="Mosaic art" description="The application will help those who want to go deeper in art. If you don't know where to start, you can view the main page that will show you the random artwork. Or you can go to the archive and search by artist or artwork."/>
        </div>
    )
}
