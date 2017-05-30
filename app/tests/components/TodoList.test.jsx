/**
 * Created by david on 5/28/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos=[{id: 1, text: 'Do something'},{id: 2, text: 'Do something else'}];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    // Finds all instances of components with type equal to Todo
    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    const todos=[];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});