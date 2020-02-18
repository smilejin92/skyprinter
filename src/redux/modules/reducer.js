import { combineReducers } from 'redux';
import display from './display';
import culture from './culture';

const reducer = combineReducers({
  display,
  culture,
});

export default reducer;
