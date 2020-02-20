import { combineReducers } from 'redux';
import display from './display';
import culture from './culture';
import passenger from './passenger';
import places from './places';
import datepicker from './datepicker';
import error from './error';

const reducer = combineReducers({
  display,
  culture,
  passenger,
  places,
  datepicker,
  error,
});

export default reducer;
