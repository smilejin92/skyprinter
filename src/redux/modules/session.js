import React from 'react';
import uuid from 'uuid';
import { takeEvery, put, call, select, delay } from 'redux-saga/effects';
import SessionService from '../../services/SessionService';
import TicketInfoDetail from '../../components/Main/TicketResult/TicketInfoDetail';

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
  type: LOAD_MORE_TICKETS,
});

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

export const setInfiniteScroll = () => ({
  type: SET_INFINITE_SCROLL,
});

export const setTicketIndex = ticketEndIndex => ({
  type: SET_TICKET_INDEX,
  ticketEndIndex,
});

// FUNCTIONS
const convertDateToString = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const _date = date.getDate();
  return `${year}-${Math.floor(month / 10) === 0 ? `0${month}` : month}-${
    Math.floor(_date / 10) === 0 ? `0${_date}` : _date
  }`;
};

const formatDateString = dateString => {
  const time = dateString.split('T')[1];
  const [militaryHours, minutes] = time.split(':');
  const timePeriod = +militaryHours < 12 ? '오전' : '오후';
  const hours = +militaryHours <= 12 ? +militaryHours : +militaryHours - 12;
  return `${timePeriod} ${hours}:${minutes}`;
};

const formatDuration = duration => {
  const hours = Math.floor(duration / 60);
  if (!hours) return `${duration}분`;

  const minutes = duration % 60;
  if (!minutes) return `${hours}시간`;

  return `${hours}시간 ${minutes}분`;
};

const priceToString = price => {
  let result = '';
  let _price = price + '';
  _price = _price.split('.')[0];

  let count = 0;
  for (let i = _price.length - 1; i >= 0; i--) {
    result = _price[i] + result;
    count += 1;
    if (i > 0 && count === 3) {
      result = ',' + result;
      count = 0;
    }
  }
  return result;
};

const isSamePlace = ticket => {
  if (!ticket.InboundLeg) return true;
  const { OutboundLeg, InboundLeg } = ticket;
  return OutboundLeg.DestinationStation === InboundLeg.OriginStation;
};

const getAirlineLogo = (leg, data) => {
  const { Carriers } = leg;
  if (Carriers.length < 2) {
    const [carrierId] = Carriers;
    const { ImageUrl, Name } = data.Carriers.filter(c => c.Id === carrierId)[0];
    return <img src={ImageUrl} alt={Name} />;
  } else {
    let altText = '';
    for (let i = 0; i < Carriers.length - 1; i++) {
      const { Name } = data.Carriers.filter(c => c.Id === Carriers[i])[0];
      altText += `${Name} + `;
    }
    const { Name } = data.Carriers.filter(
      c => c.Id === Carriers[Carriers.length - 1],
    )[0];
    altText += Name;
    return <div>{altText}</div>;
  }
};

const getOperatingAirline = (leg, data, type) => {
  const { Carriers, OperatingCarriers } = leg;
  const operatorIds = OperatingCarriers.filter(oc => !Carriers.includes(oc));

  if (!operatorIds.length) {
    return <div></div>;
  } else {
    const operatorNames = [];
    operatorIds.forEach(id => {
      const { Name } = data.Carriers.filter(c => c.Id === id)[0];
      operatorNames.push(Name);
    });

    let text = '';
    for (let i = 0; i < operatorNames.length - 1; i++) {
      text += `${operatorNames[i]}, `;
    }

    // operators에 Carriers의 요소가 없는 경우 = operators에서 운항
    if (operatorIds.length === OperatingCarriers.length) {
      text += `${operatorNames[operatorNames.length - 1]}에서 운항`;
    } else {
      // operators에 Carriers의 요소가 있는 경우 = ~에서 부분 운항
      text += `${operatorNames[operatorNames.length - 1]}에서 부분 운항`;
    }
    return <div className={`operators ${type}`}>{text}</div>;
  }
};

const getTimeDifference = leg => {
  const { Departure, Arrival } = leg;
  const [departureDate] = Departure.split('T');
  const [arrivalDate] = Arrival.split('T');
  const departureDateObj = new Date(departureDate);
  const arrivalDateObj = new Date(arrivalDate);
  return (arrivalDateObj - departureDateObj) / 1000 / 60 / 60 / 24;
};

const isSameDay = leg => {
  const { Departure, Arrival } = leg;
  const [departureDate] = Departure.split('T');
  const [arrivalDate] = Arrival.split('T');
  return departureDate === arrivalDate;
};

const getPlaceCode = (placeId, data) => {
  const [targetPlace] = data.Places.filter(p => p.Id === placeId);
  return targetPlace.Code;
};

const getParentPlaceCode = (placeId, data) => {
  const [targetPlace] = data.Places.filter(p => p.Id === placeId);
  return getPlaceCode(targetPlace.ParentId, data);
};

const getNumberOfStops = leg => {
  const { Stops, Segments } = leg;
  if (!Stops.length) {
    return 0;
  } else {
    if (Stops.length === Segments.length) {
      return Segments.length - 1;
    } else {
      return Stops.length;
    }
  }
};

const getStopsList = (leg, data) => {
  const { Stops, Segments } = leg;
  const textElements = [];
  if (Stops.length === Segments.length) {
    for (let i = 1; i < Segments.length; i++) {
      const prevDest = Segments[i - 1].DestinationStation;
      const curOrigin = Segments[i].OriginStation;
      let text = '';
      const placeCode =
        prevDest === curOrigin
          ? getPlaceCode(prevDest, data)
          : getParentPlaceCode(prevDest, data);
      text += placeCode;
      if (i + 1 < Stops.length) text += ', ';

      if (prevDest !== curOrigin) {
        textElements.push(
          <span id={placeCode} warning={true}>
            {text}
          </span>,
        );
      } else {
        textElements.push(<span id={placeCode}>{text}</span>);
      }
    }
  } else {
    for (let i = 0; i < Stops.length; i++) {
      let text = '';
      const placeCode = getPlaceCode(Stops[i], data);
      text += placeCode;
      if (i + 1 < Stops.length) text += ', ';
      textElements.push(
        <span key={uuid.v4()} id={placeCode}>
          {text}
        </span>,
      );
    }
  }
  return textElements;
};

const getStopDots = leg => {
  const $lis = [];
  const stops = getNumberOfStops(leg);
  for (let i = 0; i < stops; i++) {
    $lis.push(<li key={uuid.v4()}></li>);
  }
  return $lis;
};

function pushTickets(start, end, pollResult, progress) {
  const { Itineraries } = pollResult;
  const tickets = [];
  for (let i = start; i < end; i++) {
    if (!Itineraries[i]) break;
    tickets.push(
      <TicketInfoDetail
        key={uuid.v4()}
        data={pollResult}
        itinerary={Itineraries[i]}
        progress={progress}
        formatDateString={formatDateString}
        formatDuration={formatDuration}
        getAirlineLogo={getAirlineLogo}
        getOperatingAirline={getOperatingAirline}
        getTimeDifference={getTimeDifference}
        isSameDay={isSameDay}
        getPlaceCode={getPlaceCode}
        getParentPlaceCode={getParentPlaceCode}
        getNumberOfStops={getNumberOfStops}
        getStopsList={getStopsList}
        getStopDots={getStopDots}
        priceToString={priceToString}
        isSamePlace={isSamePlace}
      />,
    );
  }
  return tickets;
}

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
    const { headers } = yield call(SessionService.createSession, params);
    const locationToArr = headers.location.split('/');
    const sessionKey = locationToArr[locationToArr.length - 1];
    yield put(setSessionKey(sessionKey));

    // 3. 2에서 생성한 Session의 상태가 complete될 때까지 poll
    const filterOption = yield select(({ session }) => session.filterOption);

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
      yield put({ type: SET_TICKETS });

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

export function* setTickets() {
  const ticketEndIndex = yield select(({ session }) => session.ticketEndIndex);
  const pollResult = yield select(({ session }) => session.pollResult);
  const progress = yield select(({ session }) => session.progress);
  const tickets = yield call(
    pushTickets,
    0,
    ticketEndIndex,
    pollResult,
    progress,
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
    pushTickets,
    ticketEndIndex,
    ticketEndIndex + 10,
    pollResult,
    progress,
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
  },
  infiniteScroll: false,
  ticketEndIndex: 10,
};

// REDUCER
export default function session(state = initialState, action) {
  switch (action.type) {
    case ADD_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
      };

    case ASSIGN_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };

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
        infiniteScroll: false,
        progress: 0,
        filterOption: {
          sortType: 'price',
          sortOrder: 'asc',
        },
        ticketEndIndex: 10,
      };

    case INIT_INFINITE_SCROLL:
      return {
        ...state,
        infiniteScroll: true,
        ticketEndIndex: state.ticketEndIndex + 10,
      };

    case SET_TICKET_INDEX:
      return {
        ...state,
        ticketEndIndex: action.ticketEndIndex,
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
