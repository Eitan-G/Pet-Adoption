import React, { Component } from 'react'
import Navbar from "./Navbar"
import '../stylesheets/App.scss'

class App extends Component {
  render() {
    return <div>
      <div className="current-screen">Hello</div>
      <Navbar />
    </div>
  }
}

export default App
