import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import {combineReducers} from "redux";


export default combineReducers({
    auth: authReducer,
    profile: profileReducer
});