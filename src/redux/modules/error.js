// ACTIONS
export const SET_ERROR = 'skyprinter/error/SET_ERROR';
export const CLEAR_ERROR = 'skyprinter/error/CLEAR_ERROR';

// ACTION CREATORS
export const setError = errors => ({
  type: SET_ERROR,
  errors,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

// INITIAL STATE
const initialState = {
  errorOccurred: false,
  errors: null,
};

// REDUCER
export default function error(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        errorOccurred: true,
        errors: action.errors,
      };
    case CLEAR_ERROR:
      return {
        errorOccurred: false,
        errors: null,
      };
    default:
      return state;
  }
}
