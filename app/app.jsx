import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp'

const actions = require('actions');
const store = require('configureStore').configure();
import TodoAPI from 'TodoAPI';

// playground 
// import './../playground/firebase/index';

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation()

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  // TodoApp and all of it's children have access to store via react-redux's Provider
  document.getElementById('app')
)
