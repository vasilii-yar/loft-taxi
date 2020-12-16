import {call, put, select, takeEvery} from "redux-saga/effects";
import {FETCH_PROFILE_DATA, updateProfileData, updateProfileDataState, UPLOAD_PROFILE_DATA} from "./profileActions";
import {getAuthToken} from "../auth/authReducer";
import {getCardData, saveCardData} from "../../../util/server/serverConversation";

export function* uploadProfileDataSaga(action) {
    const payload = action.payload;
    const token = yield select(getAuthToken);
    payload.token = token;

    const response = yield call(saveCardData, payload);

    if (response.success) {
        yield put(updateProfileData(payload));
        yield put(updateProfileDataState(true));
    }
}

export function* fetchProfileDataSaga(action) {
    const token = yield select(getAuthToken);
    const response = yield call(getCardData, token);

    if (response.success === undefined) {
        yield put(updateProfileData(response));
        yield put(updateProfileDataState(true));
    }
}

export function* profileSaga() {
    yield takeEvery(UPLOAD_PROFILE_DATA, uploadProfileDataSaga);
    yield takeEvery(FETCH_PROFILE_DATA, fetchProfileDataSaga);
}