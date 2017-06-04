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


const TodoApp = React.createClass({
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;