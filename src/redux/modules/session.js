import { takeEvery, put, call, select, delay } from 'redux-saga/effects';
import SessionService from '../../services/SessionService';

// ACTIONS
export const CREATE_SESSION = 'skyprinter/session/CREATE_SESSION';
export const SET_SESSION_KEY = 'skyprinter/session/SET_SESSION_KEY';
export const SET_POLL_RESULT = 'skyprinter/session/SET_POLL_RESULT';
export const SET_PROGRESS_RESULT = 'skyprinter/session/SET_PROGRESS_RESULT';
export const POLL_SESSION = 'skyprinter/session/POLL_SESSION';
export const TOGGLE_STOP = 'skyprinter/session/TOGGLE_STOP';
export const SET_FILTER_OPTION = 'skyprinter/session/SET_FILTER_OPTION';
export const SET_STOP_RESULT = 'skyprinter/session/SET_STOP_RESULT';
export const RESET_RESULT = 'skyprinter/session/RESET_RESULT';
export const SET_ALL_RESULT = 'skyprinter/session/SET_ALL_RESULT';
export const TOGGLE_FILTER_LOADER = 'skyprinter/session/TOGGLE_FILTER_LOADER';

// ACTION CREATORS
export const createSession = allInfo => ({
  type: CREATE_SESSION,
  allInfo,
});

export const setSessionKey = sessionKey => ({
  type: SET_SESSION_KEY,
  sessionKey,
});

export const setPollResult = data => ({
  type: SET_POLL_RESULT,
  pollResult: data,
});

export const pollSession = loader => ({
  type: POLL_SESSION,
  loader: loader,
});

export const toggleStop = () => ({
  type: TOGGLE_STOP,
});

export const setFilterOption = filterOption => ({
  type: SET_FILTER_OPTION,
  filterOption,
});

export const resetResult = () => ({
  type: RESET_RESULT,
});

export const setAllResult = allResult => ({
  type: SET_ALL_RESULT,
  allResult,
});

export const toggleFliterLoader = () => ({
  type: TOGGLE_FILTER_LOADER,
});

// INITIAL STATE
const initialState = {
  sessionKey: null,
  pollResult: null,
  allResult: null,
  progress: 0,
  filterOption: {
    sortType: 'price',
    sortOrder: 'asc',
  },
  infiniteScroll: false,
  filterLoader: false,
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
export function* postSession({ allInfo }) {
  const { culture, places, passenger, datepicker } = allInfo;
  const { country, currency, locale } = culture;
  const { inBoundId, outBoundId } = places;
  const { adults, children, cabinClass } = passenger;
  const { outboundDate, inboundDate } = datepicker;

  const params = {
    locale,
    country,
    currency,
    originPlace: inBoundId + '-sky',
    destinationPlace: outBoundId + '-sky',
    outboundDate: convertDateToString(outboundDate),
    adults,
  };

  if (inboundDate) params.inboundDate = convertDateToString(inboundDate);

  try {
    // 1. 초기화
    yield put(resetResult());

    // 2. 세션 생성
    // const { headers } = yield call(SessionService.createSession, params);
    // const locationToArr = headers.location.split('/');
    // const sessionKey = locationToArr[locationToArr.length - 1];
    // yield put(setSessionKey(sessionKey));

    // 2. 더미데이터
    const sessionKey = '872de3c0-f55e-4e70-8458-5c682cb1b019';
    yield put(setSessionKey(sessionKey));

    // 3. 2에서 생성한 Session의 상태가 complete될 때까지 poll
    const filterOption = yield select(({ session }) => session.filterOption);
    console.log('initial filter options');
    console.log(filterOption);

    while (true) {
      const { data } = yield call(
        SessionService.pollSession,
        sessionKey,
        filterOption,
      );

      // 프로그래스바 계산
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

      // 4. 세션 로딩 80% 완료시 표시할 티켓 생성. 최초 1회만
      yield put(setAllResult(data));
      yield put(setPollResult(data));
      // 4. 세션 로딩이 complete되면 원본을 allResult에 저장한 뒤
      // 5. UI에 표시할 티켓을 가장 최근 적용된 필터로 poll해온다.
      if (data.Status === 'UpdatesComplete') {
        // yield put(setAllResult(data));
        yield put({ type: POLL_SESSION });
        break;
      }
      yield delay(1000);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getSession(action) {
  if (action.loader) yield put(toggleFliterLoader());
  const sessionKey = yield select(({ session }) => session.sessionKey);
  const filterOption = yield select(({ session }) => session.filterOption);
  console.log('most recent filter options');
  console.log(filterOption);
  try {
    const { data } = yield call(
      SessionService.pollSession,
      sessionKey,
      filterOption,
    );
    if (action.loader) yield put(toggleFliterLoader());
    yield put(setPollResult(data));
  } catch (error) {
    console.error(error);
  }
}

// ROOT SAGA
export function* sessionSaga() {
  yield takeEvery(CREATE_SESSION, postSession);
  yield takeEvery(POLL_SESSION, getSession);
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
        pollResult: action.pollResult,
      };

    case SET_PROGRESS_RESULT:
      return {
        ...state,
        progress: action.progress,
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

    case SET_FILTER_OPTION:
      return {
        ...state,
        filterOption: action.filterOption,
      };

    case SET_ALL_RESULT:
      return {
        ...state,
        allResult: action.allResult,
      };

    case RESET_RESULT:
      return {
        ...state,
        allResult: null,
        pollResult: null,
        progress: 0,
        filterOption: {
          sortType: 'price',
          sortOrder: 'asc',
        },
      };

    case TOGGLE_FILTER_LOADER:
      return {
        ...state,
        filterLoader: !state.filterLoader,
      };

    default:
      return state;
  }
}
