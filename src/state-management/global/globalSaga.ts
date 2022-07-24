import { call, put, takeLatest } from 'redux-saga/effects';
import { completeAppInitialization, hideLoader, showLoader } from './globalActionCreators';
import { START_INIT_APP } from './globalActionTypes';

function* appInitWorker() {
  try {
    console.log('callled');
    
    yield call(authUserProfileApiCallWorker, {
      payload: {
        isLoading: false
      }
    });
    yield put(completeAppInitialization());
  } catch (error) {
    console.log('appInitWorker', error);
  }
}

function* authUserProfileApiCallWorker({ payload: { isLoading } }: any) {
  try {
    if (isLoading) {
      yield put(showLoader());
    }
    const userProfile = {
      name: 'Soikat Dutta',
      address: 'Dhaka, Bangladesh',
      mobile: '018111111111',
      email: 'soikat@gmail.com',
      id: 1
    };

    if (isLoading) {
      yield put(hideLoader());
    }
    return userProfile;
  } catch (error) {
    yield put(hideLoader());
    return null;
  }
}

function* globalSagaWatcher() {
  yield takeLatest(START_INIT_APP, appInitWorker);
}

export default globalSagaWatcher;