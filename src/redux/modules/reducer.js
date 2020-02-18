import { combineReducers } from 'redux';
import display from './display';
import culture from './culture';
import datepicker from './datepicker';

const reducer = combineReducers({
  display,
  culture,
  datepicker,
});

export default reducer;
