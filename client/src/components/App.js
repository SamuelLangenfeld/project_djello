import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from 'react-router-dom';
import UserListContainer from '../containers/UserListContainer';

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
            <div>Hello My shizzle</div>
            <UserListContainer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
