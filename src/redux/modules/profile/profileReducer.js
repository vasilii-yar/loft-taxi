import {UPDATE_PROFILE_DATA} from "./profileActions";

const initialState = {
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
    token: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROFILE_DATA:
            return action.payload;
        default:
            return state;
    }
}
