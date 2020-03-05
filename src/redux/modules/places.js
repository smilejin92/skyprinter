// src/redux/modules/places.jsx
// 리듀서버전
import { takeEvery, put, select } from 'redux-saga/effects';
import { SET_ERROR } from './error';

// ACTIONS
export const SET_PLACE = 'skyprinter/places/SET_PLACE';
export const FETCH_PLACE = 'skyprinter/places/FETCH_PLACE';
export const SWITCH_PLACES = 'skyprinter/places/SWITCH_PLACES';
export const INITIALIZE_PLACES = 'skyprinter/places/INITIALIZE_PLACES';

// ACTION CREATORS
export const initializePlaces = () => ({
  type: INITIALIZE_PLACES
});
export const setPlace = places => ({ type: SET_PLACE, places });
export const switchPlaces = () => ({ type: SWITCH_PLACES });

export function* fetchPlaces(action) {
  const error = yield select(state => state.error);

  try {
    yield put({
      type: FETCH_PLACE,
      places: action.places
    });

    if (error.errorOccurred) {
      const places = yield select(state => state.places);
      let newErrors = error.errors;
      if (newErrors !== null) {
        if (places.inBoundId && places.outBoundId) {
          newErrors = newErrors.filter(e => e.type !== 'Incorrect places');
        }
        if (places.inBoundId !== places.outBoundId) {
          newErrors = newErrors.filter(e => e.type !== 'PlaceId is same');
        }
        if (places.inBoundId.length !== 2 && places.outBoundId.length !== 2) {
          // 나중에 비워내고 브라우저로 변경
          newErrors = newErrors.filter(e => e.type !== 'No Country');
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

// ROOT SAGA
export function* placesSaga() {
  yield takeEvery(SET_PLACE, fetchPlaces);
}

// INIITIAL STATE
const initialState = {
  inBoundId: '',
  inBoundName: '',
  outBoundId: '',
  outBoundName: ''
};

// REDUCER
export default function places(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_PLACES:
      return initialState;

    case FETCH_PLACE:
      const { places } = action;
      if (places.type === 'inBound') {
        return {
          inBoundId: places.PlaceId,
          inBoundName: places.PlaceName,
          outBoundId: state.outBoundId,
          outBoundName: state.outBoundName
        };
      } else {
        return {
          inBoundId: state.inBoundId,
          inBoundName: state.inBoundName,
          outBoundId: places.PlaceId,
          outBoundName: places.PlaceName
        };
      }
    case SWITCH_PLACES:
      return {
        inBoundId: state.outBoundId,
        inBoundName: state.outBoundName,
        outBoundId: state.inBoundId,
        outBoundName: state.inBoundName
      };
    default:
      return state;
  }
}
