/**
 * Created by david on 5/30/17.
 */
const $ = require('jquery');

module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
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

    // sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        // this means a.completed === false && b.completed === true
        return -1;
        // -1 means that a could come before b
      } else if (a.completed && !b.completed) {
        return 1;
        // 1 means that a should come after b
      } else {
        return 0;
        // no sorting required
      }
    })
    // the sort function modifies the var meaning there is no need to return anything like we did with filter
    return filteredTodos;
  }
}