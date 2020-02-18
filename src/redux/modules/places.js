// src/redux/modules/places.jsx
// 리듀서버전

// ACTIONS
export const SET_PLACE = 'skyprinter/places/SET_PLACE';
export const SWITCH_PLACES = 'skyprinter/places/SWITCH_PLACES';

// ACTION CREATORS
export const setPlace = places => ({ type: SET_PLACE, places });
export const switchPlaces = () => ({ type: SWITCH_PLACES });

// INIITIAL STATE
const initialState = {
  inBoundId: '',
  inBoundName: '',
  outBoundId: '',
  outBoundName: '',
};

// REDUCER
export default function places(state = initialState, action) {
  switch (action.type) {
    case SET_PLACE:
      const { places } = action;
      if (places.type === 'inBound') {
        return {
          inBoundId: places.PlaceId,
          inBoundName: places.PlaceName,
          outBoundId: state.outBoundId,
          outBoundName: state.outBoundName,
        };
      } else {
        return {
          inBoundId: state.inBoundId,
          inBoundName: state.inBoundName,
          outBoundId: places.PlaceId,
          outBoundName: places.PlaceName,
        };
      }
    case SWITCH_PLACES:
      return {
        inBoundId: state.outBoundId,
        inBoundName: state.outBoundName,
        outBoundId: state.inBoundId,
        outBoundName: state.inBoundName,
      };
    default:
      return state;
  }
}
