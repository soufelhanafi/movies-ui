import { createStore, applyMiddleware } from "redux";

const initialState = {
  hello: "hello",
  value: ""
};

function createInitialReducer(state = initialState, action) {
  switch (action.type) {
    case "world":
      return { ...state, value: "world" };
    case "Joker":
      return { ...state, value: "Joker" };
    default:
      return state;
  }
}

const store = createStore(createInitialReducer);
export default store;
