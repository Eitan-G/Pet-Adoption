import { connect } from 'react-redux'
import UserProfile from '../UserProfile'
import { updateAgePreference, goToNextPet, updateTypePreference } from '../../actions'

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAgePreference: (key, value) => {
            dispatch(updateAgePreference(key, value))
            dispatch(goToNextPet())
        },
        updateTypePreference: preference => {
            dispatch(updateTypePreference(preference))
        }
    }
}

const UserProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfile)

export default UserProfileContainer