import { connect } from 'react-redux'
import SearchPanel from '../SearchPanel';
import { goToNextPet, saveCurrentPet } from '../../actions'
import { getActivePetId, getCurrentUser, getVisiblePets, getCurrentPet } from '../../selectors';

const mapStateToProps = state => {
    const activePetId = getActivePetId(state)
    const { typePreference, ageRange } = getCurrentUser(state)
    const filteredPets = getVisiblePets(state)
    return {
        pet: getCurrentPet(state),
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