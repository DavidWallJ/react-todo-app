/**
 * Created by david on 5/28/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    const todoText = 'Water the cat';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

    expect(todoApp.state.todos[0].createdAt).toBeA('number');

  });

  it('should toggle completed value when handleToggle called', () => {
    const todoItem = {
      id: 11,
      text: 'test this stuff',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoItem]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);

    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });

  it('should toggle todo from completed to uncompleted', () => {
    const todoItem = {
      id: 11,
      text: 'test this stuff',
      completed: true,
      createdAt: 1234,
      completedAt: 4321
    };

    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoItem]});
    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });
});