import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import app from './reducers/root'
import { Provider } from 'react-redux';

const store = createStore(app)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
