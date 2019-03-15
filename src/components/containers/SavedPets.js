import SavedPets from '../SavedPets'
import { connect } from 'react-redux';
import { setActivePet, setActiveTab } from '../../actions'

const mapStateToProps = state => {
    return {
        pets: [...state.savedPets].map(id => state.pets.find(pet => pet.id === id))
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveTab: tab => { dispatch(setActiveTab(tab)) },
        setActivePet: id => { dispatch(setActivePet(id)) }
    }
}

const SavedPetsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SavedPets)

export default SavedPetsContainer