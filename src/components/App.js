import React, { Component } from 'react'
import NavbarContainer from './containers/navbar'
import '../stylesheets/App.scss'

class App extends Component {
  render() {
    return <div>
      <div className="current-screen">Hello</div>
      <NavbarContainer />
    </div>
  }
}

export default App
