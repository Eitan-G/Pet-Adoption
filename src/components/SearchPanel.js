import React, { Component } from 'react'
import PetProfile from './PetProfile'

class SearchPanel extends Component {
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    renderProfile = () => this.props.pet
        ? <PetProfile pet={this.props.pet} size='large' />
        : <div>No pets available!</div>

    render() {
        console.log(this.props.pet)
        return <div>
            {this.renderProfile()}
        </div>
    }
}

export default SearchPanel