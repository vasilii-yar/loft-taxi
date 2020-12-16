import authReducer from "./auth/authReducer";
import profileReducer from "./profile/profileReducer";
import {combineReducers} from "redux";


export default combineReducers({
    auth: authReducer,
    profile: profileReducer
});