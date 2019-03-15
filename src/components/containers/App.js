import { connect } from 'react-redux'
import App from '../App'
import { getActiveTab } from '../../selectors';

const mapStateToProps = state => {
    return { activeTab: getActiveTab(state) }
}

const AppContainer = connect(
    mapStateToProps,
    null,
)(App)

export default AppContainer