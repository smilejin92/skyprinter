import { combineReducers } from 'redux';
import display from './display';
import culture from './culture';
import passenger from './passenger';
import places from './places';
import datepicker from './datepicker';

const reducer = combineReducers({
  display,
  culture,
  passenger,
  places,
  datepicker,
});

export default reducer;
