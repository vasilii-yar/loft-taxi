import {LOG_IN, LOG_OUT} from "./authActions";
import {AUTH_PERSISTENT_KEY, getDataFromLocalStorage} from "../../../util/localstorage/localStorage";
import {createSelector} from "reselect";

const persistentState = getDataFromLocalStorage(AUTH_PERSISTENT_KEY)
const initialState = persistentState ? persistentState : {isLoggedIn: false, token: ""}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {isLoggedIn: true, token: action.payload};
        case LOG_OUT:
            return {isLoggedIn: false, token: ""};
        default:
            return state;
    }
}

export const getAuthToken = createSelector(
    state => state.auth.token, token => token
);
