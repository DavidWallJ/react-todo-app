/**
 * Created by david on 6/2/17.
 */
import firebase, { firebaseRef } from 'firebaseDB';
import moment from 'moment';
import thunk from 'redux-thunk';
// we installed thunk so we could return functions
// and thus async actions

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  }
}

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

// this is an async action
export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
      // must use null in firebase instead of undefined inorder to remove item
    };
    const todoRef = firebaseRef.child('todos').push(todo);
    // added to firebase
    return todoRef.then(() => {
      // update the state and thus our view
      dispatch(addTodo({
        // updates the store
        ...todo,
        id: todoRef.key
        // unique id from firebase
      }));
    });
  };
};

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
}

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const todoRef = firebaseRef.child(`todos/${id}`);
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null
      // if completed is true set a new timestamp
      // if completed is false remove completeAt
    };

    return todoRef.update(updates).then(() => {
      // update firebase
      dispatch(updateTodo(id, updates));
      // update state and thus the view
    });
    // the return above allows use to chain our functions
  };
};

