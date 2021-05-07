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
            <div className="tools">            
            <img src="https://www.flaticon.com/svg/vstatic/svg/1126/1126012.svg?token=exp=1620385508~hmac=e958094f254c846ae48c91d4b654ec2a" alt="React"/>
            <img src="https://www.flaticon.com/svg/vstatic/svg/541/541509.svg?token=exp=1620384611~hmac=8af7ee60d1e1e50e17cd2c7ed94ca8dd" alt="JS"/>
            <img src="https://www.flaticon.com/svg/vstatic/svg/1051/1051277.svg?token=exp=1620386027~hmac=6570c84937a098d7a8dc266ee2abfda0" alt="HTML"/>
            <img src="https://www.flaticon.com/svg/vstatic/svg/732/732190.svg?token=exp=1620386080~hmac=01a44c1b83cd3097794774880980a4af" alt="CSS"/>
            <img src="https://www.flaticon.com/svg/vstatic/svg/919/919825.svg?token=exp=1620386128~hmac=ed2d56fc9bf4b0405c978a810b16ad1f" alt="Nodejs"/>
            <img src="https://www.flaticon.com/svg/vstatic/svg/919/919847.svg?token=exp=1620386132~hmac=3996240876f1dcbd803d35979954e42d" alt="Github"/>
            <img src="https://www.flaticon.com/svg/vstatic/svg/919/919831.svg?token=exp=1620386206~hmac=016f77fb723820e803adf83c70d2d6ae" alt="SASS"/>
            </div>
            <p className="Home-about-me">Tools I use</p>
            <div className="tools">
            <img src="https://www.flaticon.com/svg/vstatic/svg/906/906324.svg?token=exp=1620384560~hmac=c1cc8b6cb8ec032b4ff7344911867a9b" alt="VS Code"/>
            <img src="https://www.flaticon.com/svg/vstatic/svg/873/873120.svg?token=exp=1620384571~hmac=22b323d50dcdf0d07d485442a4bac087" alt="Heroku"/>
            <img src="https://www.flaticon.com/svg/vstatic/svg/1348/1348052.svg?token=exp=1620386326~hmac=e38bc018210363d190eed257967d5b3c" alt="Bootstrap"/>
            </div>
        </div>
    )
}
