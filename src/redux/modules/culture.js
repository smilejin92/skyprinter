// ACTIONS
const SET_CULTURE = 'SET_CULTURE';
const FETCH_COUNTRY_LIST = 'FETCH_COUNTRY_LIST';
const FETCH_CURRENCY_LIST = 'FETCH_CURRENCY_LIST';

// ACTION CREATORS

// INIITIAL STATE
const initialState = {
  locale: 'ko-KR',
  country: 'KR',
  currency: 'KRW',
  countries: [],
  currencies: [],
};

// REDUCER
export default function culture(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
