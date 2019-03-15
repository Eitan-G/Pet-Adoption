import { connect } from 'react-redux'
import { setActiveTab } from '../../actions'
import Navbar from '../Navbar'
import { getActiveTab } from '../../selectors';

const mapStateToProps = state => {
    return { activeTab: getActiveTab(state) }
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
