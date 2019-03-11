import React, { Component } from "react";
import constants from "../constants"

class Navbar extends Component {
    handleNavClick(name) {
        console.log(name)
    }

    buildNavButtons() {
        const options = constants.navigation
        return <ul className="nav-options">{
            options.map((name, i) => <li key={`nav-li-${i}`} onClick={() => this.handleNavClick(name)}>
                    {name}
                </li>)
        }</ul>
    }

    render() {
        return <nav className="navbar">
            {this.buildNavButtons()}
        </nav>
    }
}

export default Navbar