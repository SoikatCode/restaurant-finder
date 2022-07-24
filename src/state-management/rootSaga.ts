import { all } from 'redux-saga/effects';
import globalSagaWatcher from './global/globalSaga';

export default function* rootSaga() {
  yield all([globalSagaWatcher()]);
}