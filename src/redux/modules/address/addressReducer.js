import {FETCH_ADDRESS_LIST_SUCCESS} from "./addressActions";

const initialState = {
    addressList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ADDRESS_LIST_SUCCESS:
            return {
                ...state,
                addressList: action.payload
            }
        default:
            return state
    }

}