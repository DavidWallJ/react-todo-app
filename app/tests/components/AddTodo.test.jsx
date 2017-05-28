/**
 * Created by david on 5/28/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo if a valid todo is entered', () => {
    const todoText = 'Water the cat';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    // without the [0] we wouldn't get the actual form

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo if a invalid todo is entered', () => {
    const todoText = '';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(todoText);
  });
});