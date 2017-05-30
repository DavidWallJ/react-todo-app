/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';

const Todo = React.createClass({
  render() {
    const {id, text, completed} = this.props
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    )
  }
})

module.exports = Todo;