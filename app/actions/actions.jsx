/**
 * Created by david on 6/2/17.
 */
import firebase, { firebaseRef } from 'firebaseDB';
import moment from 'moment';


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

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

