import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Resume from "./components/Resume";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>        
        <Navbar />
        <Switch>
        <Route path="/work">
            <Work />
        </Route>
        <Route path="/resume">
            <Resume />
          </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/">
            <Home />
        </Route>
        
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
