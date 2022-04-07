import React from 'react'
import WorkCard from './WorkCard'
import "./Work.css"

export default function Work() {
    return (
        <div className="work">
            <h2 className="work-header">My Recent Works</h2>
            <div className="workcards">
            <WorkCard link1="https://github.com/ktihonov93/mosaic-art" link2="https://ktihonov-mosaic-art.herokuapp.com/" src="https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009_960_720.jpg" title="Mosaic art" description="The application will help those who want to go deeper in art. If you don't know where to start, you can view the main page that will show you the random artwork. Or you can go to the archive and search by artist or artwork."/>
            <WorkCard link1="https://github.com/glanzwulf/wcs_project1" link2="https://wild-code-bar.netlify.app" src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg" title="Wild Code Bar" description={<div>Out first project with <a href="https://github.com/chhavi-choudhary">Chhavi</a> and <a href="https://github.com/glanzwulf">Vladyslav</a>. Full responsive website of Wild Code Bar made with HTML, CSS and JavaScript. You can check our menu, fill the form to join us by clicking our fancy button, look at testimonials left by previous clients, leave your personal review with stars and avatar by clicking another fancy button, and also book a table.</div>}/>
            <WorkCard link1="https://github.com/glanzwulf/wild_hackaton" link2="https://wild-hackathon-mento.herokuapp.com/" src="https://i.ibb.co/5vrtLmL/1.jpg" title="mentō" description={<div>Our first hackaton project based on React with <a href="https://github.com/chhavi-choudhary">Chhavi</a>, <a href="https://github.com/glanzwulf">Vladyslav</a> and <a href="https://github.com/ptaunay">Pedro</a>. Mobile-only app for mental health. You can choose your mood and check activities to cheer you up or to keep it that way. Also you can find a list of doctors and filter by best doctors. And, finally, you can fill your profile: put your name, image and check the mood over time. Take care!</div>}/>
            <WorkCard link1="https://github.com/ktihonov93/ktihonov93.github.io" link2="https://ktihonov93.github.io/" src="https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg" title="pokedex" description={<div>Full responsive React app. You can check a list of pokemons, change the page to see another pokemons, click "catch" button to catch the pokemon and you can see on Caught Pokemon page the list of your caught pokemons. If you refresh the page, your caught pokemons will still be in caught list. You can click on "release" button to remove pokemon from caught list. Also if you click on a pokemon card you can see the details of pokemon and the actual date of caught.</div>}/>
            </div>
        </div>
    )
}
