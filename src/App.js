import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createHashHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import Router from './router';
import reducer from './redux/reducers';
import sagas from './redux/sagas';

import 'antd/dist/antd.css';

const sagaMiddleware = createSagaMiddleware();
const history = createHashHistory();

const store = createStore(
  reducer(history),
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} />
      </Provider>
    );
  }
}

export default App;
