import React, { Component } from 'react'
import NavbarContainer from './containers/navbar'
import '../stylesheets/App.scss'
import SearchPanelContainer from './containers/SearchPanel'
import SavedPetsContainer from './containers/SavedPets'
import UserProfileContainer from './containers/UserProfile'
import { NAVIGATION } from '../constants'

class App extends Component {
  renderCurrentPanel = () => {
    const { SAVED, SEARCH, SETTINGS } = NAVIGATION
    switch(this.props.activeTab) {
      case SAVED:
        return <SavedPetsContainer />
      case SEARCH:
        return <SearchPanelContainer />
      case SETTINGS:
        return <UserProfileContainer />
      default:
        return <SearchPanelContainer />
    }
  }

  render() {
    return <div id="app">
      <div className="current-panel">
        {this.renderCurrentPanel()}
      </div>
      <NavbarContainer />
    </div>
  }
}

export default App
