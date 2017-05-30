/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';
// this is used to create unique ids
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate : function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: text,
          id: uuid(),
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function(id) {
    const updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
          todo.completed = !todo.completed;
          // this will toggle the true/false state of completed
          todo.completedAt = todo.completed ? moment().unix() : undefined;
          // if completed is being toggled to true a date will be returned else undefined
      }

      return todo;
    });

    this.setState({todos: updateTodos});
  },
  render() {
    const {todos, showCompleted, searchText} = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;