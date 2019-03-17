import React, { Component } from 'react'
import PetProfile from './PetProfile'
import { TOUCH_SWIPE_MIN_DISTANCE } from '../constants'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = { touchStart: null }
        this.handleTouchStart = this.handleTouchStart.bind(this)
        this.handleTouchEnd = this.handleTouchEnd.bind(this)
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onSwipe, false)
        window.addEventListener('touchstart', this.handleTouchStart, false)
        window.addEventListener('touchend', this.handleTouchEnd, false)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onSwipe, false)
        window.removeEventListener('touchstart', this.handleTouchStart, false)
        window.removeEventListener('touchend', this.handleTouchEnd, false)
    }

    handleTouchStart(e) {
        this.setState({ touchStart: e.touches[0] })
    }

    handleTouchEnd(e) {
        const distance = e.changedTouches[0].pageX - this.state.touchStart.pageX
        this.setState({ touchStart: null })
        if (e.target.className === 'blurb') { return }
        if (distance > TOUCH_SWIPE_MIN_DISTANCE) {
            this.props.handleApproval(this.props.pet)
        } else if (distance < -TOUCH_SWIPE_MIN_DISTANCE) {
            this.props.handleRejection(this.props.pet)
        }
    }

    onSwipe = e => {
        if (e.key === 'ArrowRight') {
            this.props.handleApproval(this.props.pet)
        } else if (e.key === 'ArrowLeft') {
            this.props.handleRejection(this.props.pet)
        }
    }

    renderProfile = () => this.props.pet
        ? <PetProfile pet={this.props.pet} size='large' />
        : <div>No pets available!</div>

    render() {
        return this.renderProfile()
    }
}

export default SearchPanel