import { connect } from 'react-redux'
import SearchPanel from '../SearchPanel';
import { goToNextPet, saveCurrentPet } from '../../actions'

const mapStateToProps = state => {
    const {
        activePetId, pets,
        currentUser: { typePreference, ageRange }
    } = state
    const filteredPets = pets.filter(
        pet => pet.type === typePreference && pet.age >= ageRange.min && pet.age <= ageRange.max
    )
    return {
        pet: filteredPets.find(pet => pet.id === activePetId),
        currentUser: { typePreference, ageRange },
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleApproval: () => {
            dispatch(saveCurrentPet())
            dispatch(goToNextPet())
        },
        handleRejection: () => { dispatch(goToNextPet()) },
        goToNextPet: () => { dispatch(goToNextPet()) }
    }
}

const SearchPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchPanel)

export default SearchPanelContainer