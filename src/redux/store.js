import {applyMiddleware, createStore} from "redux";
import mainReducer from "./modules"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);