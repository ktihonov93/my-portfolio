import React from 'react'
import "./Home.css"

export default function Home() {
    return (
        <div className="Home">
            <p>Hello, everyone!<span className="wave">👋🏻</span></p>
            <p>My name is Konstantin.</p>
            <p>I'm a Front End Web Developer</p>
            <div  className="Home-avatar"><img src="https://i.ibb.co/fx38XFt/F3ty-GHWn-Urc-1.jpg" className="img-fluid" alt="avatar"/></div>
            <p className="Home-about-me">About me</p>
            <p className="Home-about-me-content"><p>I'm a certified, self-disciplined, constant self-training, ambitious and purposeful <b>Front End Developer</b>.</p>
            <p>In 2021, at <b>Wild Code School</b>, I studied for 5 months as a Front End Developer, acquiring new skills like <b>React</b> and <b>JavaScript</b>.</p>
            <p>Also in 2015, I mastered the specialty of an English translator in the field of professional communication.</p>
            <p>In my free time, I prefer to improve my <b>algorithmic skills on JavaScript</b> in <b>Codewars</b>, read fiction, programming literature and soft skills articles in both Russian and English.</p>
            <p>I also enjoy doing physical exercises during breaks between work.</p>
            <p>In future, I'm planning to become a Full Stack Web Developer.</p>
            <p>I consider this profession one of the most fascinating professions in the world.</p>
            </p>
            <p className="Home-about-me">Professional Skillset</p>
            <p className="Home-about-me">Tools I use</p>
        </div>
    )
}
