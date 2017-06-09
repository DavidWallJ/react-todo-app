/**
 * Created by david on 6/2/17.
 */
import expect from 'expect'
import df from 'deep-freeze-strict'
// deep freeze ensures that the state isn't changed (for the actual app) when running tests
const reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'sup dog'
      }

      const res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText)
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      }

      const res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toEqual(true)
    })
  })

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'some text here',
          completed: false,
          createdAt: 1111111
        }
      }

      const res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(action.todo);
    });
    
    it('should update todo', () => {
      const todos = [{
        id: '123',
        text: 'something',
        completed: true,
        createdAt: 123,
        completedAt: 126
      }];
      const updates = {
        completed: false,
        completedAt: null
      };
      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      const res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      const todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3333
      }];

      const action = {
        type: 'ADD_TODOS',
        todos
      };

      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should wipe existing todos on logout', () => {
      const todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3333
      }];

      const action = {
        type: 'LOGOUT',
      };

      const res = reducers.todosReducer(df([todos]), df(action));

      expect(res.length).toEqual(0);
    });
  });
  describe('authReducer', () => {
    it('should store uid on LOGIN', () => {
       const action = {
         type: 'LOGIN',
         uid: 'abc123'
       };
       
       const res = reducers.authReducer(undefined, df(action));

       expect(res).toEqual({
         uid: action.uid
       });
    });

    it('should wipe auth on LOGOUT', () => {
       const authData = {
         uid: '123abc'
       };
       // going to pass this onto the state

       const action = {
         type: 'LOGOUT'
       };

       const res = reducers.authReducer(df(authData), df(action));

       expect(res).toEqual({});

    });
  });
});