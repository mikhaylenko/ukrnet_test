import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import MainLayout from './layouts/MainLayout';
import mainReducer from './store/reducers/index';

import './style.scss';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  mainReducer,
  composeEnhancer(
    applyMiddleware(thunk),
  ),
);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <MainLayout />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
