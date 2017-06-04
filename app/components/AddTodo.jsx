/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
// this allows us access to all actions
// below we call startAddTodo

export const AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    const {dispatch} = this.props;
    // dispatch is now on the props due to 'connect'
    const todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText))
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

export default connect()(AddTodo)