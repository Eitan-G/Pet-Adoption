import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import AppContainer from './components/containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import app from './reducers'
import { Provider } from 'react-redux';

const store = createStore(app)

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
