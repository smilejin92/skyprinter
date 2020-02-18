import React from 'react';
import uuid from 'uuid';
import { takeEvery, put, call } from 'redux-saga/effects';
import CultureService from '../../services/CultureService';

// ACTIONS
export const SET_CULTURE = 'skyprinter/culture/SET_CULTURE';
export const SET_COUNTRIES = 'skyprinter/culture/SET_COUNTRIES';
export const FETCH_COUNTRIES_PENDING =
  'skyprinter/culture/FETCH_COUNTRIES_PENDING';
export const FETCH_COUNTRIES_SUCCESS =
  'skyprinter/culture/FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAIL = 'skyprinter/culture/FETCH_COUNTRIES_FAIL';

export const SET_CURRENCIES = 'skyprinter/culture/SET_CURRENCIES';
export const FETCH_CURRENCIES_PENDING =
  'skyprinter/culture/FETCH_CURRENCIES_PENDING';
export const FETCH_CURRENCIES_SUCCESS =
  'skyprinter/culture/FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_FAIL = 'skyprinter/culture/FETCH_CURRENCIES_FAIL';

// ACTION CREATORS
export const setCulture = (country, currency) => ({
  type: SET_CULTURE,
  country,
  currency,
});

export const setCountries = () => ({
  type: SET_COUNTRIES,
});

export const setCurrencies = () => ({
  type: SET_CURRENCIES,
});

// SAGA GENERATORS
export function* fetchCountries() {
  try {
    yield put({ type: FETCH_COUNTRIES_PENDING });
    const { data } = yield call(CultureService.getCountries);
    yield put({ type: FETCH_COUNTRIES_SUCCESS, countries: data.Countries });
  } catch (error) {
    yield put({ type: FETCH_COUNTRIES_FAIL, error });
  }
}

export function* fetchCurrencies() {
  try {
    yield put({ type: FETCH_CURRENCIES_PENDING });
    const { data } = yield call(CultureService.getCurrencies);
    yield put({ type: FETCH_CURRENCIES_SUCCESS, currencies: data.Currencies });
  } catch (error) {
    yield put({ type: FETCH_CURRENCIES_FAIL, error });
  }
}

// ROOT SAGA
export function* cultureSaga() {
  yield takeEvery(SET_COUNTRIES, fetchCountries);
  yield takeEvery(SET_CURRENCIES, fetchCurrencies);
}

// INIITIAL STATE
const initialState = {
  locale: 'ko-KR',
  country: 'KR',
  countryName: '대한민국',
  currency: 'KRW',
  currencySymbol: '₩',
  countries: [],
  countriesDOM: [],
  currencies: [],
  currenciesDOM: [],
};

// REDUCER
export default function culture(state = initialState, action) {
  switch (action.type) {
    case SET_CULTURE:
      const [selectedCountry] = state.countries.filter(
        c => c.Code === action.country,
      );
      const [selectedCurrency] = state.currencies.filter(
        c => c.Code === action.currency,
      );

      return {
        ...state,
        country: action.country,
        countryName: selectedCountry.Name,
        currency: action.currency,
        currencySymbol: selectedCurrency.Symbol,
      };

    // case FETCH_COUNTRIES_PENDING:
    case FETCH_COUNTRIES_SUCCESS:
      const countriesDOM = action.countries
        .sort((c1, c2) => (c1.Name < c2.Name ? -1 : 1))
        .map(({ Code, Name }) => (
          <option key={uuid.v4()} value={Code}>
            {Name}
          </option>
        ));

      return {
        ...state,
        countries: action.countries,
        countriesDOM,
      };

    case FETCH_COUNTRIES_FAIL:
      console.error(action.error);
      return state;

    // FETCH_CURRENCIES_PENDING:
    case FETCH_CURRENCIES_SUCCESS:
      const popular = [];
      const rest = [];

      action.currencies
        .sort((c1, c2) => (c1.Code < c2.Code ? -1 : 1))
        .forEach(({ Code, Symbol: symbol }) => {
          const option = (
            <option key={uuid.v4()} value={Code}>
              {Code} - {symbol}
            </option>
          );

          if (Code === 'EUR' || Code === 'GBP' || Code === 'USD')
            popular.push(option);
          else rest.push(option);
        });

      const currenciesDOM = [
        <optgroup key={uuid.v4()} label="인기 통화">
          {popular}
        </optgroup>,
        <optgroup key={uuid.v4()} label="기타 통화">
          {rest}
        </optgroup>,
      ];

      return {
        ...state,
        currencies: action.currencies,
        currenciesDOM,
      };

    case FETCH_CURRENCIES_FAIL:
      console.log(action.error);
      return state;

    default:
      return state;
  }
}
