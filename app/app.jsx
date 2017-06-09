import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

const actions = require('actions');
const store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';
// playground 
// import './../playground/firebase/index';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
    store.dispatch(actions.startAddTodos());
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});
// hash history allows use to manipulate the url
// firebase onAuthStateChange does what it sounds like.
// here we are checking to see if a user exists



// Load foundation
$(document).foundation()

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  // TodoApp and all of it's children have access to store via react-redux's Provider
  document.getElementById('app')
)


