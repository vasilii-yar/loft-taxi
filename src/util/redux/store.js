import {applyMiddleware, createStore} from "redux";
import mainReducer from "../../reducers"
import {authMiddleware} from "../../middleware/authMiddleware";

export const store = createStore(mainReducer, applyMiddleware(authMiddleware));