/**
 * Created by david on 5/28/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jquery'
import TestUtils from 'react-addons-test-utils'

import Todo from 'Todo'

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  it('should call onToggle prop with id on click', () => {
    const todoItem = {
      id: 144,
      text: 'write todo.text.jsx test',
      completed: true
    }

    const spy = expect.createSpy()
    const todo = TestUtils.renderIntoDocument(<Todo {...todoItem} onToggle={spy}/>)

    const $el = $(ReactDOM.findDOMNode(todo))
    // select it with qQuery
    TestUtils.Simulate.click($el[0]);
    // simulate a click
    expect(spy).toHaveBeenCalledWith(144);
  });
});