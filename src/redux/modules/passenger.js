import { takeEvery, put, select } from 'redux-saga/effects';
import { SET_ERROR } from './error';

//Action
const SET_CABIN_CLASS = 'skyprinter/passenger/SET_CABIN_CLASS';
const SET_ADULTS = 'skyprinter/passenger/SET_ADULTS';
const SET_CHILDREN = 'skyprinter/passenger/SET_CHILDREN';
const SET_CHILD_AGE = 'skyprinter/passenger/SET_CHILD_AGE';
const FETCH_CHILD_AGE = 'skyprinter/passenger/FETCH_CHILD_AGE';
const FETCH_CHILDREN = 'skyprinter/passenger/FETCH_CHILDREN';
const RESET_PASSENGER = 'skyprinter/datepicker/RESET_PASSENGER';

//Action creater
export const resetPassenger = ({ cabinClass, adults, children }) => ({
  type: RESET_PASSENGER,
  cabinClass,
  adults,
  children,
});

export const setCabinClass = cabinClass => ({
  type: SET_CABIN_CLASS,
  cabinClass,
});
export const setAdults = mode => ({ type: SET_ADULTS, mode });
export const setChildren = mode => ({ type: SET_CHILDREN, mode });
export const setChildAge = (id, age) => ({ type: SET_CHILD_AGE, id, age });

//initalState
const intialState = {
  cabinClass: 'economy',
  adults: 1,
  children: [],
};

export function* fetchChildAge(action) {
  try {
    yield put({
      type: FETCH_CHILD_AGE,
      id: action.id,
      age: action.age,
    });
    const error = yield select(state => state.error);

    if (error.errorOccurred) {
      const passengerInfo = yield select(state => state.passenger);
      let newErrors = error.errors;
      if (newErrors !== null) {
        if (
          passengerInfo.children.filter(child => child.type === undefined)
            .length === 0
        ) {
          newErrors = newErrors.filter(e => e.type !== 'Age not selected');
        }

        if (
          passengerInfo.adults >=
          passengerInfo.children.filter(child => child.age < 2).length
        ) {
          newErrors = newErrors.filter(e => e.type !== 'No matching adult');
        }

        newErrors.length === 0 || newErrors === null
          ? yield put({ type: SET_ERROR, errors: null })
          : yield put({ type: SET_ERROR, errors: newErrors });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* fetchChildren(action) {
  try {
    yield put({
      type: FETCH_CHILDREN,
      mode: action.mode,
    });
    const error = yield select(state => state.error);

    if (error.errorOccurred) {
      const passengerInfo = yield select(state => state.passenger);
      let newErrors = error.errors;
      if (
        passengerInfo.children.filter(child => child.type === undefined)
          .length === 0
      ) {
        newErrors = newErrors.filter(e => e.type !== 'Age not selected');
      } else if (passengerInfo.children.length === 0) {
        newErrors = newErrors.filter(e => e.type !== 'Age not selected');
      }
      newErrors.length === 0 || newErrors === null
        ? yield put({ type: SET_ERROR, errors: null })
        : yield put({ type: SET_ERROR, errors: newErrors });
    }
  } catch (error) {
    console.log(error);
  }
}

// ROOT SAGA
export function* passengerSaga() {
  yield takeEvery(SET_CHILD_AGE, fetchChildAge);
  yield takeEvery(SET_CHILDREN, fetchChildren);
}

//reducer
export default function passenger(state = intialState, action) {
  switch (action.type) {
    case RESET_PASSENGER:
      return {
        cabinClass: action.cabinClass,
        adults: action.adults,
        children: action.children,
      };

    case SET_CABIN_CLASS:
      return {
        ...state,
        cabinClass: action.cabinClass,
      };
    case SET_ADULTS:
      if (action.mode === 'add')
        return {
          ...state,
          adults: state.adults + 1,
        };
      if (action.mode === 'subtract')
        return {
          ...state,
          adults: state.adults - 1,
        };
      break;
    case FETCH_CHILDREN:
      if (action.mode === 'add') {
        const getNextId = () =>
          Math.max(0, ...state.children.map(c => c.id)) + 1;
        return {
          ...state,
          children: [
            ...state.children,
            { id: getNextId(), age: '나이를 선택하세요', type: undefined },
          ],
        };
      }
      if (action.mode === 'remove') {
        const newChildren = [...state.children];
        newChildren.pop();
        return {
          ...state,
          children: newChildren,
        };
      }
      break;
    case FETCH_CHILD_AGE:
      if (action.age === '0' || action.age === '1') {
        const newChildren = state.children.map(c =>
          c.id === action.id ? { ...c, type: 'infant', age: action.age } : c,
        );
        return {
          ...state,
          children: newChildren,
        };
      } else {
        const newChildren = state.children.map(c =>
          c.id === action.id ? { ...c, type: 'child', age: action.age } : c,
        );
        return {
          ...state,
          children: newChildren,
        };
      }
    default:
      return state;
  }
}
