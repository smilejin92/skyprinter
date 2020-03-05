import axios from 'axios';

const COUNTRIES_URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/ko-KR';
const CURRENCIES_URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies';
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

export default class CultureService {
  static getCountries() {
    return axios.get(COUNTRIES_URL, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    });
  }

  static getCurrencies() {
    return axios.get(CURRENCIES_URL, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    });
  }
}
