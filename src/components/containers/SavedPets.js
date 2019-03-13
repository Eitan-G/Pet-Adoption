import SavedPets from '../SavedPets'
import { connect } from 'react-redux';
import { setActiveTab } from '../../actions'

const mapStateToProps = state => {
    return {
        pets: [...state.savedPets].map(idx => state.pets[idx])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveTab: tab => { dispatch(setActiveTab(tab)) }
    }
}

const SavedPetsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SavedPets)

export default SavedPetsContainer