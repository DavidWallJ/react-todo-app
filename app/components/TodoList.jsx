/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from 'Todo'
import TodoAPI from 'TodoAPI';

export const TodoList = React.createClass({
  // exported for testing purposes
  render() {
    const {todos, showCompleted, searchText} = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do Here</p>
        )
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
          // spread operator lets you spread out all the properties
          // all into individual props (id, text)
        )
      })
    }
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
})

export default connect(
  // default because this is the export required for the app NOT the testing
  (state) => {
    return state;
    // shows we want all state items
  }
)(TodoList);
  //this bit of code here allows this 'TodoList' child of the 'provider' TodoApp to 'connect' to the 'providers' state items