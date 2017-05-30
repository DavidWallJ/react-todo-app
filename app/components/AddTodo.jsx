/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';

const AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    const todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
      // this puts the cursor back into the input field
    }
  },
  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;