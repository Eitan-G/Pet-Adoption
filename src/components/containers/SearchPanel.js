import { connect } from 'react-redux'
import SearchPanel from '../SearchPanel';
import { goToNextPet, saveCurrentPet } from '../../actions'
import { getActivePetId, getCurrentUser, getVisiblePets } from '../../selectors';

const mapStateToProps = state => {
    const activePetId = getActivePetId(state)
    const { typePreference, ageRange } = getCurrentUser(state)
    const filteredPets = getVisiblePets(state)
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