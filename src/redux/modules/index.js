import authReducer from "./auth/authReducer";
import profileReducer from "./profile/profileReducer";
import {combineReducers} from "redux";
import addressReducer from "./address/addressReducer";
import routeReducer from "./route/routeReducer";


export default combineReducers({
    auth: authReducer,
    profile: profileReducer,
    address: addressReducer,
    route: routeReducer
});