import axios from 'axios';
import qs from 'query-string';

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const CREATE_SESSION_URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0';

export default class SessionService {
  static createSession(params) {
    const config = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': RAPID_API_KEY,
    };

    return axios.post(CREATE_SESSION_URL, qs.stringify(params), {
      headers: config,
    });
  }
}
