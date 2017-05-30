/**
 * Created by david on 5/30/17.
 */
const $ = require('jquery')

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos))
      // local storage can only store strings.  Thus, stringifying the object
      // 'todos' is just naming the entry.  You'll need it to 'get' it again.
      return todos
    }
    // if you don't specify  an else 'undefined' will get returned
  },
  getTodos: function () {
    const stringTodos = localStorage.getItem('todos')
    let todos = []

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

    return $.isArray(todos) ? todos : []

  },
  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted
      // if an items completed status is false it will return true
      // which is what we want
      // OR
      // if showCompleted (via checkbox) is set to true we show the item
    })

    // filter by searchText

    filteredTodos = filteredTodos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    });

    // is there search text
    // convert to lowercase
    // 'something here'.indexOf('here')
    //

    // sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        // this means a.completed === false && b.completed === true
        return -1
        // -1 means that a could come before b
      } else if (a.completed && !b.completed) {
        return 1
        // 1 means that a should come after b
      } else {
        return 0
        // no sorting required
      }
    })
    // the sort function modifies the var meaning there is no need to return anything like we did with filter
    return filteredTodos
  }
}