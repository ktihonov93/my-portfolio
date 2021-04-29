import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav role="navigation">
            <div id="menuToggle">
            <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
          </div>
        </nav>
        </div>
    )
}
