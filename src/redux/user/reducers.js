import actions from './actions';

const initialState = {
  isLogged: true
};

export default function useReducer(state = initialState, action) {
  switch (action.type) {
    case actions.USER_LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
