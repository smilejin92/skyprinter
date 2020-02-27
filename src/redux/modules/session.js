import { takeEvery, put, call, select, delay } from 'redux-saga/effects';
import SessionService from '../../services/SessionService';
import TicketService from '../../services/TicketService';

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
export const SET_INFINITE_SCROLL = 'skyprinter/session/SET_INFINITE_SCROLL';
export const SET_TICKET_INDEX = 'skyprinter/session/SET_TICKET_INDEX';
export const SET_TICKETS = 'skyprinter/session/SET_TICKETS';
export const ASSIGN_TICKETS = 'skyprinter/session/ASSIGN_TICKETS';
export const ADD_TICKETS = 'skyprinter/session/ADD_TICKETS';
export const INIT_INFINITE_SCROLL = 'skyprinter/session/INIT_INFINITE_SCROLL';
export const LOAD_MORE_TICKETS = 'skyprinter/session/LOAD_MORE_TICKETS';

// ACTION CREATORS
export const loadMoreTickets = () => ({
  type: LOAD_MORE_TICKETS
});

export const createSession = allInfo => ({
  type: CREATE_SESSION,
  allInfo
});

export const setSessionKey = sessionKey => ({
  type: SET_SESSION_KEY,
  sessionKey
});

export const setPollResult = data => ({
  type: SET_POLL_RESULT,
  pollResult: data
});

export const pollSession = loader => ({
  type: POLL_SESSION,
  loader: loader
});

export const toggleStop = () => ({
  type: TOGGLE_STOP
});

export const setFilterOption = filterOption => ({
  type: SET_FILTER_OPTION,
  filterOption
});

export const resetResult = () => ({
  type: RESET_RESULT
});

export const setAllResult = allResult => ({
  type: SET_ALL_RESULT,
  allResult
});

export const toggleFliterLoader = () => ({
  type: TOGGLE_FILTER_LOADER
});

export const setInfiniteScroll = () => ({
  type: SET_INFINITE_SCROLL
});

export const setTicketIndex = ticketEndIndex => ({
  type: SET_TICKET_INDEX,
  ticketEndIndex
});

// SAGA GENERATOR
export function* postSession({ allInfo }) {
  const { culture, places, passenger, datepicker } = allInfo;
  const { country, currency, locale } = culture;
  const { inBoundId, outBoundId } = places;
  // children, infants
  const { adults } = passenger;
  const { outboundDate, inboundDate } = datepicker;

  const params = {
    locale,
    country,
    currency,
    originPlace: inBoundId + '-sky',
    destinationPlace: outBoundId + '-sky',
    outboundDate: TicketService.convertDateToString(outboundDate),
    adults
  };

  if (inboundDate)
    params.inboundDate = TicketService.convertDateToString(inboundDate);

  try {
    // 1. 초기화
    yield put(resetResult());

    // 2. 세션 생성
    const { headers } = yield call(SessionService.createSession, params);
    const locationToArr = headers.location.split('/');
    const sessionKey = locationToArr[locationToArr.length - 1];
    yield put(setSessionKey(sessionKey));

    // 3. 2에서 생성한 Session의 상태가 complete될 때까지 poll
    const filterOption = yield select(({ session }) => session.filterOption);
    // price, asc

    while (true) {
      const { data } = yield call(
        SessionService.pollSession,
        sessionKey,
        filterOption
      );

      // 프로그래스바 계산
      const { Agents } = data;
      const AllAgents = Agents.length;
      const PendingAgents = Agents.filter(
        Agent => Agent.Status === 'UpdatesComplete'
      ).length;

      const progressNum = (PendingAgents / AllAgents) * 100;
      yield put({
        type: SET_PROGRESS_RESULT,
        progress: Math.floor(progressNum)
      });

      // 4. 세션 로딩시 표시할 티켓 생성
      yield put(setAllResult(data));
      yield put(setPollResult(data));
      yield put({ type: SET_TICKETS });

      // 4. 세션 로딩이 complete되면 원본을 allResult에 저장한 뒤
      // 5. UI에 표시할 티켓을 가장 최근 적용된 필터로 poll해온다.
      if (data.Status === 'UpdatesComplete') {
        // yield put(setAllResult(data));
        console.log('오리지날 필터 옵션');
        console.log(filterOption);
        yield put({ type: POLL_SESSION });
        break;
      }
      yield delay(1500);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getSession(action) {
  if (action.loader) yield put(toggleFliterLoader());
  const sessionKey = yield select(({ session }) => session.sessionKey);
  const filterOption = yield select(({ session }) => session.filterOption);
  console.log('after loading');
  console.log(filterOption);
  try {
    const { data } = yield call(
      SessionService.pollSession,
      sessionKey,
      filterOption
    );
    if (action.loader) yield put(toggleFliterLoader());
    yield put(setPollResult(data));
    yield put({ type: SET_TICKETS });
  } catch (error) {
    console.error(error);
  }
}

export function* setTickets() {
  const ticketEndIndex = yield select(({ session }) => session.ticketEndIndex);
  const pollResult = yield select(({ session }) => session.pollResult);
  const progress = yield select(({ session }) => session.progress);
  const tickets = yield call(
    TicketService.pushTickets,
    0,
    ticketEndIndex,
    pollResult,
    progress
  );
  yield put({ type: ASSIGN_TICKETS, tickets });
}

export function* initInfiniteScroll(action) {
  const infiniteScroll = yield select(({ session }) => session.infiniteScroll);
  if (action.type === LOAD_MORE_TICKETS && !infiniteScroll) return;

  yield put({ type: INIT_INFINITE_SCROLL });
  const ticketEndIndex = yield select(({ session }) => session.ticketEndIndex);
  const pollResult = yield select(({ session }) => session.pollResult);
  const progress = yield select(({ session }) => session.progress);
  const tickets = yield call(
    TicketService.pushTickets,
    ticketEndIndex,
    ticketEndIndex + 10,
    pollResult,
    progress
  );
  yield put({ type: ADD_TICKETS, tickets });
}

// ROOT SAGA
export function* sessionSaga() {
  yield takeEvery(CREATE_SESSION, postSession);
  yield takeEvery(POLL_SESSION, getSession);
  yield takeEvery(SET_TICKETS, setTickets);
  yield takeEvery(SET_INFINITE_SCROLL, initInfiniteScroll);
  yield takeEvery(LOAD_MORE_TICKETS, initInfiniteScroll);
}

// INITIAL STATE
const initialState = {
  sessionKey: null,
  pollResult: null,
  allResult: null,
  progress: 0,
  tickets: null,
  filterOption: {
    sortType: 'price',
    sortOrder: 'asc',
    duration: ''
  },
  infiniteScroll: false,
  ticketEndIndex: 10
};

// REDUCER
export default function session(state = initialState, action) {
  switch (action.type) {
    case ADD_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets]
      };

    case ASSIGN_TICKETS:
      return {
        ...state,
        tickets: action.tickets
      };

    case SET_SESSION_KEY:
      return {
        ...state,
        sessionKey: action.sessionKey
      };

    case SET_POLL_RESULT:
      console.log('2. 검색 결과');
      return {
        ...state,
        pollResult: action.pollResult
      };

    case SET_PROGRESS_RESULT:
      return {
        ...state,
        progress: action.progress
      };

    case TOGGLE_STOP:
      if (state.filterOption.stops === 0) {
        const { stops, ...filterOption } = state.filterOption;
        return {
          ...state,
          filterOption
        };
      } else {
        return {
          ...state,
          filterOption: {
            ...state.filterOption,
            stops: 0
          }
        };
      }

    case SET_FILTER_OPTION:
      console.log('1. 필터 옵션 초기화');
      return {
        ...state,
        filterOption: action.filterOption
      };

    case SET_ALL_RESULT:
      return {
        ...state,
        allResult: action.allResult
      };

    case RESET_RESULT:
      return {
        ...state,
        allResult: null,
        pollResult: null,
        infiniteScroll: false,
        progress: 0,
        filterOption: {
          sortType: 'price',
          sortOrder: 'asc'
        },
        ticketEndIndex: 10
      };

    case INIT_INFINITE_SCROLL:
      return {
        ...state,
        infiniteScroll: true,
        ticketEndIndex: state.ticketEndIndex + 10
      };

    case SET_TICKET_INDEX:
      return {
        ...state,
        ticketEndIndex: action.ticketEndIndex
      };

    case TOGGLE_FILTER_LOADER:
      return {
        ...state,
        filterLoader: !state.filterLoader
      };

    default:
      return state;
  }
}
