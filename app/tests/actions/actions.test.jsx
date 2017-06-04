/**
 * Created by david on 6/2/17.
 */
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const actions = require('actions');

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate search text action', () => {
        const action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'some search text'
        };
        const res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

  it('should toggle showCompleted', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    const res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc123',
        text: 'anything we want',
        completed: false,
        createAt: 111111
      }
    };

    const res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'my todo item';
    
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      // return an array of all the actions that were fired on our mock store
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };

    const res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
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

    const res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

});