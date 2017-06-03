/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

const actions = require('actions');

export const Todo = React.createClass({
  render() {
    const {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    // here we're setting a scss class name
    const renderedDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderedDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);