import { takeEvery, put, call, select } from 'redux-saga/effects';
import SessionService from '../../services/SessionService';
// ACTIONS
export const CREATE_SESSION = 'skyprinter/session/CREATE_SESSION';
export const SET_SESSION_KEY = 'skyprinter/session/SET_SESSION_KEY';

// ACTION CREATORS
export const createSession = () => ({
  type: CREATE_SESSION,
});

export const setSessionKey = sessionKey => ({
  type: SET_SESSION_KEY,
  sessionKey,
});

// INITIAL STATE
const initialState = {
  sessionKey: null,
  pollResults: null,
};

const convertDateToString = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const _date = date.getDate();
  return `${year}-${
    Math.floor(month / 10) === 0 ? `0${month}` : month
  }-${_date}`;
};

// SAGA GENERATOR
export function* postSession() {
  const places = yield select(state => state.places);
  const { inBoundId, outBoundId } = places;
  const culture = yield select(state => state.culture);
  const { country, currency, locale } = culture;
  const dates = yield select(state => state.datepicker);
  const { inboundDate, outboundDate } = dates;
  const passengerInfo = yield select(state => state.passenger);
  const { adults, children, cabinClass } = passengerInfo;

  const params = {
    country,
    currency,
    locale,
    originPlace: inBoundId + '-sky',
    destinationPlace: outBoundId + '-sky',
    outboundDate: convertDateToString(inboundDate),
    inboundDate: convertDateToString(outboundDate),
    adults,
  };

  try {
    const { headers } = yield call(SessionService.createSession, params);
    const locationToArr = headers.location.split('/');
    const sessionKey = locationToArr[locationToArr.length - 1];
    yield put(setSessionKey(sessionKey));
  } catch (error) {
    console.log(error);
  }
}

// ROOT SAGA
export function* sessionSaga() {
  yield takeEvery(CREATE_SESSION, postSession);
}

// REDUCER
export default function session(state = initialState, action) {
  switch (action.type) {
    case SET_SESSION_KEY:
      return {
        ...state,
        sessionKey: action.sessionKey,
      };

    default:
      return state;
  }
}
