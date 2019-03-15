import { connect } from 'react-redux'
import PetDetails from '../PetDetails'
import { getClickedPetDetails } from '../../selectors';

 const mapStateToProps = state => {
    return {
        pet: getClickedPetDetails(state)
    }
}

 const mapDispatchToProps = dispatch => {
    return {}
}

 const PetDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetDetails)

 export default PetDetailsContainer 