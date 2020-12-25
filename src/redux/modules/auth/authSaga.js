import {takeEvery, call, put} from "redux-saga/effects";
import {logIn, TRY_AUTH, TRY_REGISTERING} from "./authActions";
import {doLogin, doRegister} from "../../../util/server/serverConversation";
import {fetchProfileData} from "../profile/profileActions";

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const response = yield call(doLogin, email, password);

    if(response.success) {
        yield put(logIn(response.token));
        yield put(fetchProfileData());
    }
}

export function* registerSaga(action) {
    const {email, password, name, surname} = action.payload;
    const response = yield call(doRegister, email, password, name, surname);

    if (response.success) {
        yield put(logIn(response.token));
    }
}

export function* authSaga() {
    yield takeEvery(TRY_AUTH, authenticateSaga);
    yield takeEvery(TRY_REGISTERING, registerSaga);
}