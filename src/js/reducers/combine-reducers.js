import { combineReducers } from 'redux';
import searchTerm from './search-term';
import isRequesting from './is-requesting';

const reducers = combineReducers({
  searchTerm,
  isRequesting
});

export default reducers;