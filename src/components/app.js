import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import Navigation from "./navigation/nav-links";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Extra from "./pages/Extra";
import Auth from "./pages/auth";
import Signup from "./pages/signup";



export default class App extends Component {
 
  /* in here is the stuff about loggin in and of the such */
  constructor(props)
  {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);




  }

   handleSuccessfulLogin()
  {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnSuccessfulLogin()
  {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }


  handleSuccessfulLogout()
  {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }
 
  checkLoginStatus()
  {
    return axios.get("https://api.devcamp.space/logged_in",
    {withCredentials: true
    }).then(response  =>{
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;

      // if loggedIn and status is logged in => return data
      //if loggedIn status notlogged in => update state
      //if not logged in and status is logged in => log out

      if(loggedIn && loggedInStatus === "LOGGED_IN")
      {
        return loggedIn;
      }
      else if(loggedIn && loggedInStatus === "NOT_LOGGED_IN")
      {
        this.setState({
          loggedInStatus : "LOGGED_IN"
        });
      }
      else if(!loggedIn && loggedInStatus === "LOGGED_IN")
      {
        this.setState({
          loggedInStatus : "NOT_LOGGED_IN"
        });
      }


    }).catch(error => {
      console.log("Error", error);
    });
  }

  componentDidMount()
  {
    this.checkLoginStatus();
  }
 
 
 
 
  render() {
    return (
      <div className='app'>
        <Router>

        

        <div className="Links">
                 
          <div className="logo">
            Paul Southworth
          </div>

          <Navigation/>
          
          
          <h2>{this.state.loggedInStatus}</h2>

            
            <Switch>
              <Route exact path="/" component={Home} />

              
              if(this.state.loggedInStatus != "LOGGED_IN")
              {
                <Route path="/auth" component={Auth} />
              }
              else
              {
                <Route exact path="/" component={Home}/>
              }
              
              
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/extra" component={Extra} />
              <Route path="/signup" component={Signup} />
            </Switch>

        </div>
        </Router>
      </div>
    );
  }
}
