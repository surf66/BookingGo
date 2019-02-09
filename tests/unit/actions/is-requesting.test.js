import { IsRequestingActions } from '../../../src/js/actions/index';

test('should return a setSearchTerm action when setSearchTerm is called', () => {
  const isRequesting = true;
  let result = IsRequestingActions.isRequesting(isRequesting);
  expect(result).toEqual({type: 'SET_IS_REQUESTING', value: isRequesting});
});