import React from "react";
import Router from "./router";
import { Provider } from "react-redux";

import store from "./redux/reducers";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
