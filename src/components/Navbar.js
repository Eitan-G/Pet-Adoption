import React, { Component } from "react";
import { NAVIGATION } from "../constants"

class Navbar extends Component {
    handleNavClick(name) {
        this.props.setActiveTab(name)
    }

    buildNavButton = (name, i) => {
        return <li key={`nav-li-${i}`} onClick={() => this.handleNavClick(name)}>
            {name}
        </li>
    }

    buildNavButtons = () => {
        return <ul className="nav-options">
            { Object.values(NAVIGATION).map(this.buildNavButton) }
        </ul>
    }

    render() {
        return <nav className="navbar">
            {this.buildNavButtons()}
        </nav>
    }
}

export default Navbar