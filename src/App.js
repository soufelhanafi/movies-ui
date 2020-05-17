import React from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import {createHashHistory} from "history";
import createSagaMiddleware from "redux-saga";
import {logger} from "redux-logger";

import Router from "./router";
import reducer from "./redux/reducers";
import sagas from "./redux/sagas";

import "antd/dist/antd.css";

const sagaMiddleware = createSagaMiddleware();
const history = createHashHistory();

let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV == "development") {
	middlewares.push(logger);
}

const store = createStore(
	reducer(history),
	compose(applyMiddleware(...middlewares))
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
