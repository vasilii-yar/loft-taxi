import {LOG_IN, LOG_OUT} from "./authActions";
import {getDataFromLocalStorage, saveDataToStorage} from "../../../util/localstorage/localStorage";

const PERSISTENT_KEY = "authState";
const persistentState = getDataFromLocalStorage(PERSISTENT_KEY)
const initialState = persistentState ? persistentState : {isLoggedIn: false, token: ""}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            const loggedIn = {isLoggedIn: true, token: action.payload};
            saveState(loggedIn);
            return loggedIn;
        case LOG_OUT:
            const loggedOut = {isLoggedIn: false, token: ""};
            saveState(loggedOut);
            return loggedOut;
        default:
            return state;
    }
}

export const getAuthToken = (state) => state.token;

function saveState(state) {
    saveDataToStorage(state, PERSISTENT_KEY);
}

