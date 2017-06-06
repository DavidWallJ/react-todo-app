/**
 * Created by david on 5/30/17.
 */
import expect from 'expect';
// only need expect because we're not rendering react components

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist()
  });

  // you're right here fetch todos from database 3 mins in

  describe('filterTodos', () => {
      const todos = [{
        id: 1,
        text: 'some text here',
        completed: true
      },{
        id: 2,
        text: 'some text again',
        completed: true
      },{
        id: 3,
        text: 'some text one more time',
        completed: false
      }];

      it('should return all items if showComplete is true', () => {
        const filteredTodos = TodoAPI.filterTodos(todos, true, '');

        expect(filteredTodos.length).toBe(3);
      });

    it('should return only non-completed items when show completed is false', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      // we would expect all 3 items and completed false to be at the beginning of the array
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, 'time');

      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos if searchText is empty', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

  });
})