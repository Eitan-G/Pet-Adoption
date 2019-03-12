import { connect } from 'react-redux'
import SearchPanel from '../SearchPanel';
import { setActivePet, saveCurrentPet } from '../../actions'

const mapStateToProps = state => {
    const {
        activePet, pets,
        currentUser: { typePreference, ageRange }
    } = state
    return {
        pet: pets[activePet],
        currentUser: { typePreference, ageRange },
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleRejection: pet => {
            dispatch(setActivePet(pet + 1))
        },
        handleApproval: pet => {
            dispatch(setActivePet(pet + 1))
            dispatch(saveCurrentPet())
        },
        setActivePet: pet => { dispatch(setActivePet(0)) }
    }
}

const SearchPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchPanel)

export default SearchPanelContainer