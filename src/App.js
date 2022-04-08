import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>        
        <Navbar />
        <Switch>
        <Route path="/my-portfolio/work">
            <Work />
        </Route>
        <Route path="/my-portfolio/resume">
            <Resume />
          </Route>        
        <Route path="/my-portfolio">
            <Home />
        </Route>
        
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
