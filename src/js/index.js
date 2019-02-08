import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Form from './components/form';
import reducer from './reducers/combine-reducers';

let initialState = {};

const store = createStore(reducer, initialState);

render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('app')
);