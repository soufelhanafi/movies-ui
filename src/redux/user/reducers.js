import actions from './actions';

const initialState = {
  isLogged: true,
  isLoading: true
};

export default function useReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      debugger;
      return { ...state, ...action.payload };
    case actions.USER_LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
