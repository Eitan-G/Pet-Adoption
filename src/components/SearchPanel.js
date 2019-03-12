import React, { Component } from 'react'
import PetProfile from './PetProfile'

class SearchPanel extends Component {
    componentDidMount() {
        window.addEventListener('keydown', e => {
            if (!this.props.pet) {
                this.props.setActivePet(0)
                return
            }
            switch(e.key) {
                case "ArrowRight":
                    this.props.handleApproval(this.props.pet)
                    break
                case "ArrowLeft":
                    this.props.handleRejection(this.props.pet)
                    break
            }
        })
    }

    componentWillUnmount() {

    }

    renderProfile = () => this.props.pet
        ? <PetProfile pet={this.props.pet} size='large' />
        : <div>No more pets available! Keep swiping to go back to the first</div>

    render() {
        return <div>
            {this.renderProfile()}
        </div>
    }
}

export default SearchPanel