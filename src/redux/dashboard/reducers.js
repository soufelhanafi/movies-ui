import actions from './actions';

const initialState = {
  hello: 'hello',
  value: ''
};

// eslint-disable-next-line import/prefer-default-export
export default function createDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DASHBOARD_DATA:
      return { ...state, ...action.payload };
    case 'world':
      return { ...state, value: 'world' };
    case 'Joker':
      return { ...state, value: 'Joker' };
    default:
      return state;
  }
}
