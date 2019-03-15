import { connect } from 'react-redux'
import UserProfile from '../UserProfile'
import { goToNextPet, updateUser } from '../../actions'

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToNextPet: () => { dispatch(goToNextPet()) },
        updateUser: (key, value) => {
            dispatch(updateUser(key, value))
        }
    }
}

const UserProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfile)

export default UserProfileContainer