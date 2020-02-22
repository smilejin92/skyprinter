import { all } from 'redux-saga/effects';
import { cultureSaga } from './culture';
import { sessionSaga } from './session';

export default function* rootSaga() {
  yield all([cultureSaga(), sessionSaga()]);
}
