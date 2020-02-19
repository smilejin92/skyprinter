import { all } from 'redux-saga/effects';
import { cultureSaga } from './culture';

export default function* rootSaga() {
  yield all([cultureSaga()]);
}
