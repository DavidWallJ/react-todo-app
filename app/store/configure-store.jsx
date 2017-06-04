/**
 * Created by david on 6/3/17.
 */
import * as redux from 'redux';
import thunk from 'redux-thunk';
// action generators that return functions where we can use async code
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export const configure = (initialState = {}) => {
    const reducer = redux.combineReducers({
      searchText: searchTextReducer,
      showCompleted: showCompletedReducer,
      todos: todosReducer
    });

    const store = redux.createStore(reducer, initialState, redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    // redux compose composes middleware

    return store;
};