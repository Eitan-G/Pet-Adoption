import { connect } from 'react-redux'
import SearchPanel from '../SearchPanel';
import { goToNextPet, saveCurrentPet } from '../../actions'
import { getCurrentUser, getCurrentPet } from '../../selectors';

const mapStateToProps = state => {
    const { typePreference, ageRange } = getCurrentUser(state)
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