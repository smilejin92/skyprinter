export const SELECT_CABINCLASS = 'SELECT_CABINCLASS';

export const selectCabinClass = () => ({
  type: SELECT_CABINCLASS,
});

export const ADD_ADULT = 'ADD_ADULT';
export const REDUCE_ADULT = 'REDUCE_ADULT';

export const addAdult = adult => ({
  type: ADD_ADULT,
  adult,
});

export const reduceAdult = adult => ({
  type: REDUCE_ADULT,
  adult,
});

export const ADD_CHILD = 'ADD_CHILD';
export const REDUCE_CHILD = 'REDUCE_CHILD';

export const addChild = (infant, children) => ({
  type: ADD_CHILD,
  infant,
  children,
});

export const reduceChild = (infant, children) => ({
  type: REDUCE_CHILD,
  infant,
  children,
});

export const SET_ERROR = 'SET_ERROR';

export const setError = error => ({
  type: SET_ERROR,
  error,
});
