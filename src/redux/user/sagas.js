import { all, call, put, takeEvery } from 'redux-saga/effects';
import { createHashHistory } from 'history';

import actions from './actions';

const history = createHashHistory();

export function* USER_LOGOUT() {
  yield put({
    type: actions.SET_STATE,
    payload: { isLogged: false }
  });
  yield call(history.push, '/login');
}

export function* LOAD_CURRENT_USER() {
  console.log('LOAD_CURRENT_USER');
  yield put({
    type: actions.SET_STATE,
    payload: { isLogged: false, isLoading: false }
  });
}

export default function* userSaga() {
  yield all([
    takeEvery(actions.USER_LOGOUT, USER_LOGOUT),
    takeEvery(actions.LOAD_CURRENT_USER, LOAD_CURRENT_USER),
    LOAD_CURRENT_USER()
  ]);
}
