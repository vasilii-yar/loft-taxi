import {takeEvery, call, put} from "@redux-saga/core/effects";
import {CLEAR_ROUTE, routingSuccess, TRY_ROUTING, tryRouting} from "./routeActions";
import {getCoordinates} from "../../../util/server/serverConversation";
import {showError} from "../error/errorActions";


export function* fetchCoordinatesSaga(action) {
    try {
        const {from, to} = action.payload;
        const response = yield call(getCoordinates, from, to);

        if(response) {
            yield put(routingSuccess(response));
        } else {
            throw new Error("Не удалось загрузить координаты!");
        }
    } catch ({message, error}) {
        yield put(showError(message || error));
    }
}

export function* clearRouteSaga() {
    yield put(routingSuccess([]));
}

export function* routeSaga() {
    yield takeEvery(TRY_ROUTING, fetchCoordinatesSaga);
    yield takeEvery(CLEAR_ROUTE, clearRouteSaga);
}