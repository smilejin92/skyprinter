import { all } from 'redux-saga/effects';
import { cultureSaga } from './culture';
import { placesSaga } from './places';
import { passengerSaga } from './passenger';
import { sessionSaga } from './session';

export default function* rootSaga() {
  yield all([cultureSaga(), sessionSaga(), placesSaga(), passengerSaga()]);
}
