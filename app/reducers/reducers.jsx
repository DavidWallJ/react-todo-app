/**
 * Created by david on 6/2/17.
 */
export const searchTextReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_SEARCH_TEXT':
        return action.searchText;
      default:
        return state;
    }
};

// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED

export const showCompletedReducer = (state = 'false', action) => {
    switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
        return !state;
      default:
        return state;
    }
};