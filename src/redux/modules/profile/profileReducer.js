import {getDataFromLocalStorage, saveDataToStorage} from "../../../util/localstorage/localStorage";
import {SAVE_PROFILE_DATA} from "./profileActions";
import {getAuthToken} from "../auth/authReducer";

const initialState = {
        cardNumber: "",
        expiryDate: "",
        cardName: "",
        cvc: "",
        token: ""
    };

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_PROFILE_DATA:
            return action.payload;
        default:
            return state;
    }
}
