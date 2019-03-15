import SavedPets from '../SavedPets'
import { connect } from 'react-redux';
import { setActivePet, setActiveTab } from '../../actions'
import { getSavedPetDetails } from '../../selectors'

const mapStateToProps = state => {
    return { pets: getSavedPetDetails(state) }
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