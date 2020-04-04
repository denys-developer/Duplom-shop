import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer';
import { createStore , applyMiddleware , compose } from 'redux';
import { middleware } from "./redux/middleware";

const store = createStore(rootReducer, compose(applyMiddleware(middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'));
