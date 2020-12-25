import {call, put, takeEvery} from "@redux-saga/core/effects";
import {fetchAddressSuccess, TRY_FETCH_ADDRESS_LIST} from "./addressActions";
import {getAddressList} from "../../../util/server/serverConversation";


export function* fetchAddressListSaga(action) {
    const response = yield call(getAddressList);

    if (response.addresses) {
        yield put(fetchAddressSuccess(response.addresses));
    }
}

export function* addressSaga() {
    yield takeEvery(TRY_FETCH_ADDRESS_LIST, fetchAddressListSaga);
}