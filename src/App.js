import React from 'react'
import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './Contact';
import Portfolio from './Portfolio';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
