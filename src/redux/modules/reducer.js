import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import display from './display';
import culture from './culture';
import passenger from './passenger';
import places from './places';
import datepicker from './datepicker';
import error from './error';

const reducer = history =>
  combineReducers({
    display,
    culture,
    passenger,
    places,
    datepicker,
    error,
    router: connectRouter(history),
  });

export default reducer;
