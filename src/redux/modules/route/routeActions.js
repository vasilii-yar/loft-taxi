export const TRY_ROUTING = "loft-taxi/route/TRY_ROUTING";
export const ROUTING_SUCCESS = "loft-taxi/route/ROUTING_SUCCESS";
export const CLEAR_ROUTE = "loft-taxi/route/CLEAR_ROUTE";
export const MAKE_ORDER_SUCCESS = "loft-taxi/route/MAKE_ORDER_SUCCESS";

export const tryRouting = (from, to) => ({
    type: TRY_ROUTING,
    payload: {from, to}
});

export const routingSuccess = (coordinates) => ({
    type: ROUTING_SUCCESS,
    payload: coordinates
});

export const clearRoute = () => ({type: CLEAR_ROUTE});

export const makeOrderSuccess = (flag) => ({
    type: MAKE_ORDER_SUCCESS,
    payload: flag
});