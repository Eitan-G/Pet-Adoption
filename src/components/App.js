import React, { Component } from 'react'
import NavbarContainer from './containers/navbar'
import '../stylesheets/App.scss'
import SearchPanelContainer from './containers/SearchPanel'

class App extends Component {
  render() {
    return <div id="app">
      <div className="current-panel">
        <SearchPanelContainer />
      </div>
      <NavbarContainer />
    </div>
  }
}

export default App
