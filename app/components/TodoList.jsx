/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';
import Todo from 'Todo';

const TodoList = React.createClass({
  render() {
    const {todos} = this.props;
    const renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
          // spread operator lets you spread out all the properties
          // all into individual props (id, text)
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;