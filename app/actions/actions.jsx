/**
 * Created by david on 6/2/17.
 */
import firebase, { firebaseRef, githubProvider } from 'firebaseDB'
import moment from 'moment'
import thunk from 'redux-thunk'
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
    }
    const todoRef = firebaseRef.child('todos').push(todo)
    // added to firebase
    return todoRef.then(() => {
      // update the state and thus our view
      dispatch(addTodo({
        // updates the store
        ...todo,
        id: todoRef.key
        // unique id from firebase
      }))
    })
  }
}

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export const startAddTodos = () => {
  return (dispatch, getState) => {

    const todosRef = firebaseRef.child('todos')

    return todosRef.once('value').then((snapshot) => {
      //this is how we get a snapshot of our data at todos on the firebase db
      const todos = snapshot.val() || {}
      let parsedTodos = []
      // we needed to change the format of the object here to match the format of our app
      // we took of the id and then added the other fields using forEach
      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        })
      })
      dispatch(addTodos(parsedTodos))
    })
  }
}

// Object.keys(todos) just to get the keys
// the object format from firebase isn't the same as the format our app uses

export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
}

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const todoRef = firebaseRef.child(`todos/${id}`)
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null
      // if completed is true set a new timestamp
      // if completed is false remove completeAt
    }

    return todoRef.update(updates).then(() => {
      // update firebase
      dispatch(updateTodo(id, updates))
      // update state and thus the view
    })
    // the return above allows use to chain our functions
  }
}

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked! ', result);
    }, (error) => {
      console.log('Unable to auth', error);
    });
  }
}

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out!');
    });
  };
};