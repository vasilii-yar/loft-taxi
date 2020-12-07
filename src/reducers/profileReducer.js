import {getDataFromLocalStorage, saveDataToStorage} from "../util/localstorage/localStorage";
import {SAVE_PROFILE_DATA} from "../actions/profileActions";

const PERSISTENT_KEY = "cardState";
const persistentState = getDataFromLocalStorage(PERSISTENT_KEY)
const initialState = persistentState ? persistentState :
    {
        cardNumber: "",
        expiryDate: "",
        cardName: "",
        cvc: "",
        token: ""
    };

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_PROFILE_DATA:
            saveState(action.payload);
            return action.payload;
        default:
            return state;
    }
}

function saveState(state) {
    saveDataToStorage(state, PERSISTENT_KEY);
}