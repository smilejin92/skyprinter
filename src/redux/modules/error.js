// ACTIONS
export const SET_ERROR = 'skyprinter/error/SET_ERROR';

// ACTION CREATORS
export const setError = errors => ({
  type: SET_ERROR,
  errors,
});

// INITIAL STATE
const initialState = {
  errors: [],
};

// REDUCER
export default function error(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        errors: action.errors,
      };

    default:
      return state;
  }
}
