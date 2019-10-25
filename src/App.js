import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/Home"
import "./App.css";
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
      {/* <Navbar className="nav"></Navbar> */}
          <Switch>
          {/*<div className="container">  </div>*/}
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
           
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
