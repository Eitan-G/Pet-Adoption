import { connect } from 'react-redux'
import UserProfile from '../UserProfile'
import { updateAgePreference } from '../../actions'

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAgePreference: (key, value) => {
            dispatch(updateAgePreference(key, value))
        }
    }
}

const UserProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfile)

export default UserProfileContainer