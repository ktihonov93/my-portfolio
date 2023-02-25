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
            interval={"09/2020 - current time"}
            title={<div className="title-Timeline">Frontend Developer</div>}
            subtitle={"Andersen"}
          >
            Projects:<br></br>
            <br></br>NDA<br></br>
            <br></br> Mobile application of remote banking customer service,
            whose business goals are: increasing revenue, reducing operating
            costs, increasing market share and the number of customers. The
            system allows customers to get information about banking products
            (loans, deposits, cards), make payments and much more.<br></br>
            <br></br>
            Employee accounting <br></br>
            <br></br>The project is a web application that provides information
            about employees. App implements user registration and authorization,
            a small Personal Account of the user with some personal data, a home
            page where you can find a card of any employee, by clicking on it
            you can go to the details page.
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
            interval={"2020"}
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
              http://refrigeration.ihbt.ifmo.ru/file/article/15213.pdf,
              http://refrigeration.ihbt.ifmo.ru/file/article/16069.pdf.
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

export default ResumeContent;
