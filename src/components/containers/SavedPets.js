import SavedPets from '../SavedPets'
import { connect } from 'react-redux';
import { setActiveTab, setClickedPet } from '../../actions'
import { getSavedPetDetails } from '../../selectors'
import { PET_DETAILS } from '../../constants'

const mapStateToProps = state => {
    return { pets: getSavedPetDetails(state) }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveTab: tab => { dispatch(setActiveTab(tab)) },
        openPetDetails: id => {
            dispatch(setClickedPet(id))
            dispatch(setActiveTab(PET_DETAILS))
        }
    }
}

const SavedPetsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SavedPets)

export default SavedPetsContainer