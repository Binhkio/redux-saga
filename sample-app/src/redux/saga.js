import { all } from 'redux-saga/effects';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log('Hello Saga!!!');
}

export default function* rootSaga() {
  yield all([helloSaga()]);
}
