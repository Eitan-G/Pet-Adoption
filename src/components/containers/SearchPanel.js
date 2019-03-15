import { connect } from 'react-redux'
import SearchPanel from '../SearchPanel';
import { goToNextPet, saveCurrentPet } from '../../actions'
import { getCurrentPet, getPreferences } from '../../selectors';

const mapStateToProps = state => {
    const preferences = getPreferences(state)
    return {
        pet: getCurrentPet(state),
        currentUser: preferences,
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