import {applyMiddleware, createStore} from "redux";
import mainReducer from "./modules"
import {authMiddleware} from "./middleware/authMiddleware";
import {profileMiddleware} from "./middleware/profileMiddleware";

export const store = createStore(mainReducer, applyMiddleware(authMiddleware, profileMiddleware));