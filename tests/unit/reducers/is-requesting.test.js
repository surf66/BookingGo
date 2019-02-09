import IsRequestingReducer from '../../../src/js/reducers/is-requesting';

test('should return the initial state', () => {
  expect(IsRequestingReducer(undefined, {})).toEqual(false);
});

test('should return the initial state when given incorrect action', () => {
  expect(IsRequestingReducer(undefined, {type: 'SOME_RANDOM_ACTION',})).toEqual(false);
});

test('should return the search term passed to it when called with correct action type', () => {
  const stateBefore = {};
  const isRequesting = true;
  const action = {
    type: 'SET_IS_REQUESTING',
    value: isRequesting
  };

  let result = IsRequestingReducer(stateBefore, action);

  expect(result).toEqual(isRequesting);
});