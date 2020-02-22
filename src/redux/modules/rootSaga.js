import { all } from 'redux-saga/effects';
import { cultureSaga } from './culture';
import { placesSaga } from './places';
import { passengerSaga } from './passenger';

export default function* rootSaga() {
  yield all([cultureSaga(), placesSaga(), passengerSaga()]);
}
