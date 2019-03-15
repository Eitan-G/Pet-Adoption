import SavedPets from '../SavedPets'
import { connect } from 'react-redux';
import { setActiveTab, setClickedPet } from '../../actions'
import { PET_MODAL } from '../../constants'

const mapStateToProps = state => {
    return {
        pets: [...state.savedPets].map(id => state.pets.find(pet => pet.id === id))
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveTab: tab => { dispatch(setActiveTab(tab)) },
        openPetModal: id => {
            dispatch(setClickedPet(id))
            dispatch(setActiveTab(PET_MODAL))
        }
    }
}

const SavedPetsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SavedPets)

export default SavedPetsContainer