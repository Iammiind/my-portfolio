import React, { Component } from 'react'
import './App.css'
import Welcome from './Welcome'
import Profile from './Profile'
import Skill from './Skills'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Profile />
        <Skill />
        <Contact />
      </div>
    );
  }
}
export default App;
