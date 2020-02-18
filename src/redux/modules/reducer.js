import { combineReducers } from 'redux';
import display from './display';
import culture from './culture';
import places from './places';

const reducer = combineReducers({
  display,
  culture,
  places,
});

export default reducer;
