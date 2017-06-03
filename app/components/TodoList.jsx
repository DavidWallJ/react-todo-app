/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from 'Todo'

export const TodoList = React.createClass({
  // exported for testing purposes
  render() {
    const {todos} = this.props
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do Here</p>
        )
      }
      return todos.map((todo) => {
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
    return {
      todos: state.todos
    };
  }
)(TodoList);
  //this bit of code here allows this 'TodoList' child of the 'provider' TodoApp to 'connect' to the 'providers' state items