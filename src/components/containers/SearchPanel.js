import { connect } from 'react-redux'
import PetProfile from '../PetProfile'
import SearchPanel from '../SearchPanel';

const mapStateToProps = state => {
    const {
        activePetId, pets,
        currentUser: { typePreference, ageRange }
    } = state
    return {
        pet: pets.find(pet => pet.id === activePetId) || {},
        currentUser: { typePreference, ageRange },
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const SearchPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchPanel)

export default SearchPanelContainer