import {LOG_IN, LOG_OUT} from "../actions/authActions";
import {getDataFromLocalStorage, saveDataToStorage} from "../util/localstorage/localStorage";

const PERSISTENT_KEY = "authState";
const persistentState = getDataFromLocalStorage(PERSISTENT_KEY)
const initialState = persistentState ? persistentState : {isLoggedIn: false}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            const loggedIn = {isLoggedIn: true};
            saveState(loggedIn);
            return loggedIn;
        case LOG_OUT:
            const loggedOut = {isLoggedIn: false};
            saveState(loggedOut);
            return loggedOut;
        default:
            return state;
    }
}

function saveState(state) {
    saveDataToStorage(state, PERSISTENT_KEY);
}