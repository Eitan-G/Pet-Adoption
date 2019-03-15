import React, { Component } from 'react'
import NavbarContainer from './containers/navbar'
import '../stylesheets/App.scss'
import SearchPanelContainer from './containers/SearchPanel'
import SavedPetsContainer from './containers/SavedPets'
import UserProfileContainer from './containers/UserProfile'
import PetDetailsContainer from './containers/PetDetails'
import { NAVIGATION, PET_MODAL } from '../constants'

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
      case PET_MODAL: // Due to time constraints I'm not going to abstract modals
        return <PetDetailsContainer />
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
