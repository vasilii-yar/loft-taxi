import {CLOSE_ERROR, SHOW_ERROR} from "./errorActions";

const initialState = {
    isShow: false,
    errorMessage: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_ERROR:
            return {
                isShow: true,
                errorMessage: action.payload
            };
        case CLOSE_ERROR:
            return {
                isShow: false,
                errorMessage: ""
            };
        default:
            return state;
    }

}