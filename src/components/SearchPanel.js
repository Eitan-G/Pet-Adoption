import React, { Component } from 'react'
import PetProfile from './PetProfile'

class SearchPanel extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onSwipe, false)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onSwipe, false)
    }

    onSwipe = e => {
        switch(e.key) {
            case "ArrowRight":
            case "ArrowLeft":
                if (!this.props.pet) { //end of the line
                    this.props.setActivePet(0)
                    return
                }
        }
        switch(e.key) {
            case "ArrowRight":
                this.props.handleApproval(this.props.pet)
                break
            case "ArrowLeft":
                this.props.handleRejection(this.props.pet)
                break
        }
    }

    renderProfile = () => this.props.pet
        ? <PetProfile pet={this.props.pet} size='large' />
        : <div>No more pets available! Keep swiping to go back to the first</div>

    render() {
        return this.renderProfile()
    }
}

export default SearchPanel

// TODO: VIEW SAVED, SET SETTINGS