/**
 * Created by david on 6/2/17.
 */
import expect from 'expect';
import df from 'deep-freeze-strict';
// we don't need to use df but i think it gives you better error messages or something
const reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
      it('should set searchText', () => {
          const action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'sup dog'
          };

          const res = reducers.searchTextReducer(df(''), df(action));

          expect(res).toEqual(action.searchText);
      });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      const res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });


});