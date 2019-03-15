import { connect } from 'react-redux'
import PetDetails from '../PetDetails'
import { getClickedPetDetails } from '../../selectors';
import { setActiveTab } from '../../actions';

 const mapStateToProps = state => {
    return {
        pet: getClickedPetDetails(state)
    }
}

 const mapDispatchToProps = dispatch => {
    return {
        setActiveTab: tab => dispatch(setActiveTab(tab))
    }
}

 const PetDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetDetails)

 export default PetDetailsContainer 