export const TRY_ROUTING = "loft-taxi/route/TRY_ROUTING";
export const ROUTING_SUCCESS = "loft-taxi/route/ROUTING_SUCCESS";

export const tryRouting = (from, to) => ({
    type: TRY_ROUTING,
    payload: {from, to}
});
export const routingSuccess = (coordinates) => ({
    type: ROUTING_SUCCESS,
    payload: coordinates
});