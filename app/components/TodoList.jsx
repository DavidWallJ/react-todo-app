/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';
import Todo from 'Todo';

const TodoList = React.createClass({
  render() {
    const {todos} = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do Here</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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