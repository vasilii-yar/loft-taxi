import {call, put, takeEvery} from "@redux-saga/core/effects";
import {fetchAddressSuccess, TRY_FETCH_ADDRESS_LIST} from "./addressActions";
import {getAddressList} from "../../../util/server/serverConversation";
import {showError} from "../error/errorActions";


export function* fetchAddressListSaga(action) {
    try {
        const response = yield call(getAddressList);

        if (response.addresses) {
            yield put(fetchAddressSuccess(response.addresses));
        } else {
            throw new Error("Не удалось загрузить список адресов!");
        }
    } catch ({message, error}) {
        yield put(showError(message || error));
    }
}

export function* addressSaga() {
    yield takeEvery(TRY_FETCH_ADDRESS_LIST, fetchAddressListSaga);
}