/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';

const Todo = React.createClass({
  render() {
    const {id, text} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    );
  }
});

module.exports = Todo;