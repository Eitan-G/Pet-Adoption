import SavedPets from '../SavedPets'
import { connect } from 'react-redux';
import { setActivePet, setActiveTab } from '../../actions'
import { getAllPets, getSavedPets } from '../../selectors'

const mapStateToProps = state => {
    const allPets = getAllPets(state)
    const savedPets = getSavedPets(state)
    return {
        pets: [...savedPets].map(id => allPets.find(pet => pet.id === id))
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