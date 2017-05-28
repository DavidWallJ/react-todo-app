/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';
import TodoList from 'TodoList';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Walk the cat'
        },
        {
          id: 3,
          text: 'Dog the walk'
        },
        {
          id: 4,
          text: 'Pick up lunch'
        }
      ]
    };
  },
  render() {
    const {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;