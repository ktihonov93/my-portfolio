import React, { Fragment } from "react";
import "./ResumeContent.css";

import { Timeline, Event } from "react-timeline-scribble";

const ResumeContent = () => (
  <div className="resume">
    <div className="resume-experience">
      <Fragment>
        <h1>Experience</h1>
        <Timeline>
          <Event
            className="event"
            interval={"12/2021 - 03/2022"}
            title={<div className="title-Timeline">Frontend Developer, Intern</div>}
            subtitle={"EPAM Systems"}
          >
            Accessibility, BEM methodology, OOP basics with practical tasks, patterns, TypeScript, HTTP, AJAX,
            JavaScript, React. At the end of the internship, I successfully completed my graduation project on React
            in two weeks - https://ktihonov93.github.io/
          </Event>
          <Event
            className="event"
            interval={"01/2019 - 12/2019"}
            title={<div className="title-Timeline">Design Engineer</div>}
            subtitle={"LLC «TECHNOCONSULTING»"}
          >
            Сomprehensive design by object, including creation of a full set of
            pre-tender and tender technical documentation of the heat-exchanging
            and capacitive equipment for gas, gas processing industries,
            petrochemical, oil-refining and chemical enterprises.
          </Event>
          <Event
            interval={"07/2018 - 12/2018"}
            title={"Design Engineer"}
            subtitle={"Kirovsky Zavod"}
          >
            Design, manufacture and supply of equipment for automobile
            gas-filling compressor stations( CNG stations).
          </Event>
          <Event
            interval={"02/2016 - 06/2018"}
            title={"Design Engineer"}
            subtitle={'ЗАО НПО "Компрессор"'}
          >
            Designing of shell-and-tube natural gas heat exchangers (thermal,
            constructional, strength calculations; Calculation of
            overhungsupports for natural gas heaters; Calculation of slinging
            arrangements for natural gas heaters; issue of
            constructiondocumentation; engineering manufacturing control). These
            heat exchangers included in the fuel and impulse gas
            preparationplant for: 1) the facility of The Chayandinskoye oil, gas
            and condensate field; 2) the gas booster station of The Zapolyarnoye
            oil,gas and condensate field; 3) The Cenomanian-Aptian deposits of
            The Bovanenkovskoye oil, gas and condensate field (secondtrain); 4)
            The Cenomanian-Aptian deposits of The Bovanenkovskoye oil, gas and
            condensate field (first train).Designing of high temperature
            hot-water heating system (thermotechnical calculation ofenclosure;
            engineering manufacturing control) included in the fuel and impulse
            gaspreparation plant for : 1) the facility of The Chayandinskoye
            oil, gas and condensate field; 2) thegas booster station of The
            Zapolyarnoye oil, gas and condensate field; 3) The Cenomanian-Aptian
            deposits of TheBovanenkovskoye oil, gas and condensate field (second
            train); 4) The Cenomanian-Aptian deposits of The Bovanenkovskoye
            oil,gas and condensate field (first train).
          </Event>
        </Timeline>
      </Fragment>
    </div>
    <div className="resume-education">
      <Fragment>
        <h1>Education</h1>
        <Timeline>
          <Event
            className="event"
            interval={"11/2020 – 04/2021"}
            title={
              <div className="title-Timeline">
                5 Month Intensive Bootcamp, Front-End Developer
              </div>
            }
            subtitle={"Wild Code School"}
          >
            <p>
              Training program in order to acquire soft and hard skills to
              embrace a professional career as Front-End Web Developer.We are
              learning technical skills and developing projects using the
              knowledge that is being acquired.
            </p>
            <p>Primary Languages: JavaScript | HTML | CSS | SASS</p>
            <p>Frameworks/Libraries: React.js</p>
            <p>Others: Git | REST APIs | SCRUM | Figma</p>
          </Event>
          <Event
            interval={"2015 – 2017"}
            title={"Master's degree, Equipment and physics of low temperatures"}
            subtitle={"ITMO University"}
          >
            <p>
              Scientific publications:
              http://refrigeration.ihbt.ifmo.ru/file/article/15213.pdf,http://refrigeration.ihbt.ifmo.ru/file/article/16069.pdf.
            </p>
            <p>
              Graduate qualification work – Subject of master’s dissertation:
              “Automated calculation Algorithm of Heat Exchanger for
              LNGProduction” (Scientific supervisor: Alexander U. Baranov,
              Professor of Cryogenic Technology Department)
            </p>
          </Event>
          <Event
            interval={"2011 – 2015"}
            title={
              "Bachelor's degree, Equipment and physics of low temperatures"
            }
            subtitle={"ITMO University"}
          >
            Subject of graduate qualification work: “Calculation and design of
            cryogenic air separation unit” (Scientific supervisor:Alexander U.
            Baranov, Professor of Cryogenic Technology Department)
          </Event>
        </Timeline>
      </Fragment>
    </div>
  </div>
);

export default ResumeContent