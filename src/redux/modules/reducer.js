import { combineReducers } from 'redux';
import display from './display';
import culture from './culture';
import places from './places';
import datepicker from './datepicker';

const reducer = combineReducers({
  display,
  culture,
  places,
  datepicker,
});

export default reducer;
