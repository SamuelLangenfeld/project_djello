import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";
import UserListContainer from "../containers/UserListContainer";
import UserContainer from "../containers/UserContainer";
import HomeContainer from "../containers/HomeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <HomeContainer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
