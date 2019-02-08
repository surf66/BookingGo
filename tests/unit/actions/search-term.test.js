import { SearchTermActions } from '../../../src/js/actions/index';

test('should return a setSearchTerm action when setSearchTerm is called', () => {
  const searchTerm = 'mySearchTerm';
  let result = SearchTermActions.setSearchTerm(searchTerm);
  expect(result).toEqual({type: 'SET_SEARCH_TERM', value: searchTerm});
});