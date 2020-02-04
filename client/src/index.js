import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux'
import rootReducer from './reducers/index';
import { createStore } from 'redux'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));