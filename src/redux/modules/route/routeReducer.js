import {MAKE_ORDER_SUCCESS, ROUTING_SUCCESS} from "./routeActions";
import {createSelector} from "reselect";

const initialState = {
    coordinates: [],
    isOrderMake: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ROUTING_SUCCESS:
            return {
                ...state,
                coordinates: action.payload
            };
        case MAKE_ORDER_SUCCESS:
            return {
                ...state,
                isOrderMake: action.payload
            }
        default:
            return state;
    }

}

export const getIsOrderMake = createSelector(
    state => state.route.isOrderMake, isOrderMake => isOrderMake
);