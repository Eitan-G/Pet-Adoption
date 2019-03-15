import { connect } from 'react-redux'
import PetDetails from '../PetDetails'

 const mapStateToProps = state => {
    return {}
}

 const mapDispatchToProps = dispatch => {
    return {}
}

 const PetDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetDetails)

 export default PetDetailsContainer 