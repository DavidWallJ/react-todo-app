/**
 * Created by david on 5/30/17.
 */
const $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      // local storage can only store strings.  Thus, stringifying the object
      // 'todos' is just naming the entry.  You'll need it to 'get' it again.
      return todos;
    }
    // if you don't specify  an else 'undefined' will get returned
  },
  getTodos: function () {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos)
    } catch (e) {
      // we could put an error message here but we don't really need to because it's taken care of below
    }

    // if($.isArray(todos)){
    //   return todos;
    // } else {
    //   return [];
    // }
    // es6 style below

    return $.isArray(todos) ? todos : [];

  }
};