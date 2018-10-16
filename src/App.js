import React, { Component } from 'react';
import Router from './router';
import { NavLink } from 'react-router-dom';
import { PrivateRoute } from './components';

import 'bootstrap/dist/css/bootstrap.css';


const Navigation = (props) => {
  return (
    <header className="App-header">
      <h1 className="App-title">Online Garden</h1>
      <nav>
        <ul>
          <li><NavLink to="/login">Login Page</NavLink></li>
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/cart">Cart Page</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Router/>
      </div>
    );
  }
}

export default App;
