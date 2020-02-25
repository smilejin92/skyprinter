import { takeEvery, put, call, select } from 'redux-saga/effects';
import SessionService from '../../services/SessionService';

// ACTIONS
export const CREATE_SESSION = 'skyprinter/session/CREATE_SESSION';
export const SET_SESSION_KEY = 'skyprinter/session/SET_SESSION_KEY';
export const SET_POLL_RESULT = 'skyprinter/session/SET_POLL_RESULT';
export const SET_PROGRESS_RESULT = 'skyprinter/session/SET_PROGRESS_RESULT';
export const POLL_SESSION = 'skyprinter/session/POLL_SESSION';
export const POLL_TEMP_RESULTS = 'skyprinter/session/POLL_TEMP_RESULTS';
export const SET_TEMP_RESULTS = 'skyprinter/session/SET_TEMP_RESULTS';
export const TOGGLE_STOP = 'skyprinter/session/TOGGLE_STOP';

// ACTION CREATORS
export const createSession = () => ({
  type: CREATE_SESSION,
});

export const setSessionKey = sessionKey => ({
  type: SET_SESSION_KEY,
  sessionKey,
});

export const setPollResult = data => ({
  type: SET_POLL_RESULT,
  pollResults: data,
});

export const pollSession = () => ({
  type: POLL_SESSION,
});

export const pollTempResult = () => ({
  type: POLL_TEMP_RESULTS,
});

export const toggleStop = () => ({
  type: TOGGLE_STOP,
});

// export const renderPollResult

// INITIAL STATE
const initialState = {
  sessionKey: null,
  pollResults: null,
  tempResults: null,
  progress: 0,
  filterOption: {
    sortType: 'price',
    sortOrder: 'asc',
    stops: 1,
    outboundDepartStartTime: '15:00',
    // pageIndex: 1,
    // pageSize: 10
  },
};

const convertDateToString = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const _date = date.getDate();
  return `${year}-${Math.floor(month / 10) === 0 ? `0${month}` : month}-${
    Math.floor(_date / 10) === 0 ? `0${_date}` : _date
  }`;
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
    // 1. Session 생성

    // const { headers } = yield call(SessionService.createSession, params);
    // const locationToArr = headers.location.split('/');
    // const sessionKey = locationToArr[locationToArr.length - 1];
    const sessionKey = 'd29b9e48-c8f8-41f3-9eeb-d33b1080cfde';
    yield put(setSessionKey(sessionKey));

    // while (true) {
    //   const { data } = yield call(SessionService.pollSession, sessionKey);
    //   yield put(setPollResult(data));

    //   const { Agents } = data;
    //   const AllAgents = Agents.length;
    //   const PendingAgents = Agents.filter(
    //     Agent => Agent.Status === 'UpdatesComplete',
    //   ).length;

    //   const progressNum = (PendingAgents / AllAgents) * 100;
    //   yield put({
    //     type: SET_PROGRESS_RESULT,
    //     progress: Math.floor(progressNum),
    //   });

    //   if (data.Status === 'UpdatesComplete') break;
    // }
  } catch (error) {
    console.log(error);
  }
}

export function* getSession() {
  const sessionKey = yield select(state => state.session.sessionKey);
  // console.log(sessionKey);

  while (true) {
    try {
      const { data } = yield call(SessionService.pollSession, sessionKey);
      yield put(setPollResult(data));

      const { Agents } = data;
      const AllAgents = Agents.length;
      const PendingAgents = Agents.filter(
        Agent => Agent.Status === 'UpdatesComplete',
      ).length;

      const progressNum = (PendingAgents / AllAgents) * 100;
      yield put({
        type: SET_PROGRESS_RESULT,
        progress: Math.floor(progressNum),
      });

      if (data.Status === 'UpdatesComplete') break;
    } catch (error) {
      console.error(error);
      break;
    }
  }
}

export function* getTempResults() {
  const sessionKey = yield select(state => state.session.sessionKey);
  const filterOption = yield select(state => state.session.filterOption);
  const params = {
    ...filterOption,
  };

  let response;
  while (true) {
    response = yield call(SessionService.pollSession, sessionKey, params);
    if (response.data.Itineraries.length) {
      console.dir(response.data);
      break;
    }
  }

  yield put({ type: SET_TEMP_RESULTS, tempResults: response.data });
}

// ROOT SAGA
export function* sessionSaga() {
  yield takeEvery(CREATE_SESSION, postSession);
  yield takeEvery(POLL_SESSION, getSession);
  yield takeEvery(POLL_TEMP_RESULTS, getTempResults);
}

// REDUCER
export default function session(state = initialState, action) {
  switch (action.type) {
    case SET_SESSION_KEY:
      return {
        ...state,
        sessionKey: action.sessionKey,
      };

    case SET_POLL_RESULT:
      return {
        ...state,
        pollResults: action.pollResults,
      };

    case SET_PROGRESS_RESULT:
      return {
        ...state,
        progress: action.progress,
      };

    case SET_TEMP_RESULTS:
      return {
        ...state,
        tempResults: action.tempResults,
      };

    case TOGGLE_STOP:
      if (state.filterOption.stops === 0) {
        const { stops, ...filterOption } = state.filterOption;
        return {
          ...state,
          filterOption,
        };
      } else {
        return {
          ...state,
          filterOption: {
            ...state.filterOption,
            stops: 0,
          },
        };
      }

    default:
      return state;
  }
}
