import React from 'react'
import WorkCard from './WorkCard'
import "./Work.css"

export default function Work() {
    return (
        <div className="work">
            <h2 className="work-header">My Recent Works</h2>
            <div className="workcards">
            <WorkCard link="https://github.com/ktihonov93/mosaic-art" src="https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009_960_720.jpg" title="Mosaic art" description="The application will help those who want to go deeper in art. If you don't know where to start, you can view the main page that will show you the random artwork. Or you can go to the archive and search by artist or artwork."/>
            <WorkCard link="https://github.com/glanzwulf/wcs_project1" src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg" title="Wild Code Bar" description={<div>Out first project with <a href="https://github.com/chhavi-choudhary">Chhavi</a> and <a href="https://github.com/glanzwulf">Vladyslav</a>. Full responsive website of Wild Code Bar made with HTML, CSS and JavaScript. You can check our menu, fill the form to join us by clicking our fancy button, look at testimonials left by previous clients, leave your personal review with stars and avatar by clicking another fancy button, and also book a table.</div>}/>
            <WorkCard link="https://github.com/glanzwulf/wild_hackaton" src="https://i.ibb.co/5vrtLmL/1.jpg" title="mentō" description={<div>Our first hackaton project based on React with <a href="https://github.com/chhavi-choudhary">Chhavi</a>, <a href="https://github.com/glanzwulf">Vladyslav</a> and <a href="https://github.com/ptaunay">Pedro</a>. Mobile-only app for mental health. You can choose your mood and check activities to cheer you up or to keep it that way. Also you can find a list of doctors and filter by best doctors. And, finally, you can fill your profile: put your name, image and check the mood over time. Take care!</div>}/>
            </div>
        </div>
    )
}
