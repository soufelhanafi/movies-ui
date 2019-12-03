const initialState = {
  hello: "hello",
  value: ""
};

export function createInitialReducer(state = initialState, action) {
  switch (action.type) {
    case "world":
      return { ...state, value: "world" };
    case "Joker":
      return { ...state, value: "Joker" };
    default:
      return state;
  }
}
