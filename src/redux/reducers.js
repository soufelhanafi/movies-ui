import { combineReducers } from 'redux';
import user from './user/reducers';
import dashboard from './dashboard/reducers';

export default combineReducers({
  user,
  dashboard
});
