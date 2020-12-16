import {ROUTING_SUCCESS} from "./routeActions";

const initialState = {
    coordinates: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ROUTING_SUCCESS:
            return {
                coordinates: action.payload
            };
        default:
            return state;
    }

}