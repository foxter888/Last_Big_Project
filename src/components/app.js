import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navigation from "./navigation/nav-links";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Extra from "./pages/Extra";
import Auth from "./pages/auth";



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>

        <div className="Links">
                 
          <div className="logo">
            Paul Southworth
          </div>

          <Navigation/>
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/extra" component={Extra} />
            </Switch>

        </div>
        </Router>
      </div>
    );
  }
}
