import {takeEvery, call, put} from "@redux-saga/core/effects";
import {routingSuccess, TRY_ROUTING, tryRouting} from "./routeActions";
import {getCoordinates} from "../../../util/server/serverConversation";


export function* fetchCoordinatesSaga(action) {
    const {from, to} = action.payload;
    const response = yield call(getCoordinates, from, to);

    if(response) {
        yield put(routingSuccess(response));
    }
}

export function* routeSaga() {
    yield takeEvery(TRY_ROUTING, fetchCoordinatesSaga);
}