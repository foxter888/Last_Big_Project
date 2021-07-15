import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Extra from "./pages/Extra";
import Auth from "./pages/auth";
import Navigation from "./navigation/nav-links";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
            <Navigation/>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/auth" component={Auth} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/extra" component={Extra} />
            </Switch>
        </Router>
      </div>
    );
  }
}
