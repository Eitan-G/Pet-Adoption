import { connect } from 'react-redux'
import App from '../App'

const mapStateToProps = state => {
    return { activeTab: state.activeTab }
}

const AppContainer = connect(
    mapStateToProps,
    null,
)(App)

export default AppContainer