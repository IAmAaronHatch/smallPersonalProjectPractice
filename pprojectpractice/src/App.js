import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        testing on App.js
        <Link to='/about'><button>About</button></Link>
        <Link to='/create'><button>Create</button></Link>
      </div>
    );
  }
}

export default App;
