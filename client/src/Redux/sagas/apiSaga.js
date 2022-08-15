import {
  call, put, takeLatest, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { GET_API_POST, ALL_API_POSTS } from '../types';
import { allApi} from '../actions/apiActions';

const getApiSaga = (input) => axios(`https://rickandmortyapi.com/api/character/?name=${input.input}`);

const allApiSaga = () => axios('https://rickandmortyapi.com/api/character');

function* apiSagaWorker(action) {
  try {
    yield delay(500);
    const api = yield call(getApiSaga, action.payload);
    yield put(allApi(api.data.results));
  } catch (e) {
    console.log(e);
    yield put(allApi([{ word: 'Error from back' }]));
  }
}

function* allSagaWorker() {
  try {
    const api = yield call(allApiSaga);
    yield put(allApi(api.data.results));
  } catch (e) {
    console.log(e);
    yield put(allApi([{ word: 'Error from back' }]));
  }
}

export function* apiSagaWatcher() {
  yield takeLatest(GET_API_POST, apiSagaWorker);
}

export function* allSagaWatcher() {
  yield takeLatest(ALL_API_POSTS, allSagaWorker);
}
