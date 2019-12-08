import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Router from './router';
import reducer from './redux/reducers';
import sagas from './redux/sagas';

//antd design style
import 'antd/dist/antd.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

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
