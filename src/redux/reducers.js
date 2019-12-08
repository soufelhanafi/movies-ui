import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user/reducers';
import dashboard from './dashboard/reducers';

function combReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    user,
    dashboard
  });
}

export default combReducer;
