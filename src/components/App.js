import React, { Component } from 'react'
import Navbar from "./Navbar"
import '../stylesheets/App.scss'

class App extends Component {
  render() {
    return <div>
      <div class="current-screen">Hello</div>
      <div class="navbar"><Navbar /></div>
    </div>
  }
}

export default App
