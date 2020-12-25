import {LOG_IN, LOG_OUT} from "./authActions";
import {AUTH_PERSISTENT_KEY, getDataFromLocalStorage, saveDataToStorage} from "../../../util/localstorage/localStorage";

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

export const getAuthToken = (state) => state.auth.token;

