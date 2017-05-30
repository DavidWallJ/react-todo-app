/**
 * Created by david on 5/30/17.
 */
import expect from 'expect'
// only need expect because we're not rendering react components

import TodoAPI from 'TodoAPI'

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist()
  })
  describe('setTodos', () => {
    beforeEach(() => {
      localStorage.removeItem('todos');
    });
    // we do this beforeEach run because we have multiple tests using the localStorage

    it('should set valid todos array', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];

      TodoAPI.setTodos(todos);

      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
      // when using objects and arrays you'll want to use 'toEqual'
    });

    it('should not set invalid todos array', () => {
      const todos = 'invalid todos entry';

      TodoAPI.setTodos(todos);

      expect(localStorage.getItem(todos)).toBe(null);
    });
  });

  describe('getTodos', () => {
      it('should return empty array for bad localStorage data', () => {
          const actualTodos = TodoAPI.getTodos();
          expect(actualTodos).toEqual([])
      });

    it('should return todo if valid array in localStorage', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    })

  });
})