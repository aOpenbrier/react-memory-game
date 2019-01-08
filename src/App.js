import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Game from './components/Game'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
        <div style={{background: 'url(./assets/images/bones.jpg) fixed center /cover', minHeight: '100vh'}}>
          <Route exact path='/' component={Home}/>
          <Route path='/Game' component={Game} />
          <Route path='./LeaderBoard' component={LeaderBoard} />
          </div>
        </Router>
    );
  }
}

export default App;
