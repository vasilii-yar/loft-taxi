import {UPDATE_PROFILE_DATA, UPDATE_PROFILE_DATA_STATE} from "./profileActions";
import {createSelector} from "reselect";

const initialState = {
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
    token: "",
    isCardDataFilled: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROFILE_DATA:
            return action.payload;
        case UPDATE_PROFILE_DATA_STATE:
            return {
                ...state,
                isCardDataFilled: action.payload
            };
        default:
            return state;
    }
}

export const getCardDataState = createSelector(
    state => state.profile.isCardDataFilled, isCardDataFilled => isCardDataFilled
);
