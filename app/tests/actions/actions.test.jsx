/**
 * Created by david on 6/2/17.
 */
import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import firebase, { firebaseRef } from 'firebaseDB'
const actions = require('actions')

const createMockStore = configureMockStore([thunk])

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    }
    const res = actions.setSearchText(action.searchText)

    expect(res).toEqual(action)
  })

  it('should toggle showCompleted', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    const res = actions.toggleShowCompleted()

    expect(res).toEqual(action)
  })

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc123',
        text: 'anything we want',
        completed: false,
        createAt: 111111
      }
    }

    const res = actions.addTodo(action.todo)

    expect(res).toEqual(action)
  })

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({})
    const todoText = 'my todo item'

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions()
      // return an array of all the actions that were fired on our mock store
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      })
      expect(actions[0].todo).toInclude({
        text: todoText
      })
      done()
    }).catch(done)
  })

  it('should generate add todos action object', () => {
    const todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 3333
    }]

    const action = {
      type: 'ADD_TODOS',
      todos
    }

    const res = actions.addTodos(todos)

    expect(res).toEqual(action)
  })

  it('should generate update todo action', () => {
    const action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {completed: false}
    }

    const res = actions.updateTodo(action.id, action.updates)

    expect(res).toEqual(action)
  });

  it('should generate login action object', () => {
     const action = {
       type: 'LOGIN',
       uid: 'abc123'
     };
     const res = actions.login(action.uid);

     expect(res).toEqual(action);
  });

  it('should generate logout action object', () => {
    const action = {
      type: 'LOGOUT'
    };
    const res = actions.logout();

    expect(res).toEqual(action);
  })

  describe('test with firebase todos', () => {
    let testTodoRef;

    beforeEach((done) => {
      const todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push()

        testTodoRef.set({
          text: 'something to do',
          completed: false,
          createdAt: 12344321
        });
      })
        .then(() => done())
        .catch(done)
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done())
    })

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        // getActions is from the mockstore library

        expect(mockActions[0]).toInclude({
          // used to include instead of toEqual because we're not sure of the exact timestamp on the createdAt key value pair
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done)
      // if dispatch fails just run done
    });

    it('should populate todos and dispatch ADD_TODOS', (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('something to do');

        done();
      }, done)
    });
  });
});