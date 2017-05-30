/**
 * Created by david on 5/28/17.
 */
import React, { Component } from 'react';

const TodoSearch = React.createClass({
  handleSearch: function () {
    const showCompleted = this.refs.showCompleted.checked;
    const searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render() {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;