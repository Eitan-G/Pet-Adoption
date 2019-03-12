import { connect } from 'react-redux'
import { setActiveTab } from '../../actions'
import Navbar from '../Navbar'

const mapStateToProps = state => {
    return { activeTab: state.activeTab }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveTab: name => {
            dispatch(setActiveTab(name))
        }
    }
}

const NavbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navbar)

export default NavbarContainer
