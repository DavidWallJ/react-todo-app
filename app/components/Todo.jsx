/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';
import moment from 'moment';

const Todo = React.createClass({
  render() {
    const {id, text, completed, createdAt, completedAt} = this.props;
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
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderedDate()}</p>
      </div>
    )
  }
})

module.exports = Todo;