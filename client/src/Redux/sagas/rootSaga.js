import { all } from 'redux-saga/effects';
import { apiSagaWatcher, allSagaWatcher } from './apiSaga';

export default function* rootSaga() {
  yield all([apiSagaWatcher(), allSagaWatcher()]);
}
