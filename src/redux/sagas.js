import { all } from 'redux-saga/effects/';
import dashboard from './dashboard/sagas';
import user from './user/sagas';

export default function* rootSagas() {
  yield all([dashboard(), user()]);
}
