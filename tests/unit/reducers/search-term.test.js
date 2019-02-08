import SearchTermReducer from '../../../src/js/reducers/search-term';

test('should return the initial state', () => {
  expect(SearchTermReducer(undefined, {})).toEqual('');
});

test('should return the initial state when given incorrect action', () => {
  expect(SearchTermReducer(undefined, {type: 'SOME_RANDOM_ACTION',})).toEqual('');
});

test('should return the search term passed to it when called with correct action type', () => {
  const stateBefore = {};
  const searchTerm = 'mysearchterm';
  const action = {
    type: 'SET_SEARCH_TERM',
    value: searchTerm
  };

  let result = SearchTermReducer(stateBefore, action);

  expect(result).toEqual(searchTerm);
});