import { combineReducers } from 'redux';
import display from './display';
import culture from './culture';
import passenger from './passenger';

const reducer = combineReducers({
  display,
  culture,
  passenger,
});

export default reducer;
