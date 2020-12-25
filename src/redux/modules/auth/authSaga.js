import {takeEvery, call, put, select} from "redux-saga/effects";
import {logIn, logOut, TRY_AUTH, TRY_LOG_OUT, TRY_REGISTERING} from "./authActions";
import {doLogin, doRegister} from "../../../util/server/serverConversation";
import {fetchProfileData, updateProfileData} from "../profile/profileActions";
import {AUTH_PERSISTENT_KEY, saveDataToStorage} from "../../../util/localstorage/localStorage";
import {showError} from "../error/errorActions";


export function* authenticateSaga(action) {
    try {
        const {email, password} = action.payload;
        const response = yield call(doLogin, email, password);

        if(response.success) {
            yield put(logIn(response.token));

            const state = yield select();
            yield call(saveDataToStorage, state.auth, AUTH_PERSISTENT_KEY);

            yield put(fetchProfileData());
        } else {
            throw new Error("Не удалось авторизоваться! Попробуйте еще раз.");
        }
    } catch ({message, error}) {
        yield put(showError(message || error));
    }
}

export function* registerSaga(action) {
    try {
        const {email, password, name, surname} = action.payload;
        const response = yield call(doRegister, email, password, name, surname);

        if (response.success) {
            yield put(logIn(response.token));

            const state = yield select();
            yield call(saveDataToStorage, state.auth, AUTH_PERSISTENT_KEY);
        } else {
            throw new Error("Не удалось зарегистрироваться! Попробуйте еще раз.");
        }
    } catch ({message, error}) {
        yield put(showError(message || error));
    }
}

export function* logoutSaga() {
    try {
        yield put(logOut());
        yield put(updateProfileData({
            cardNumber: "",
            expiryDate: "",
            cardName: "",
            cvc: "",
            token: "",
            isCardDataFilled: false
        }));
        const state = yield select();
        yield call(saveDataToStorage, state.auth, AUTH_PERSISTENT_KEY);
    } catch ({message, error}) {
        yield put(showError(message || error));
    }
}

export function* authSaga() {
    yield takeEvery(TRY_AUTH, authenticateSaga);
    yield takeEvery(TRY_REGISTERING, registerSaga);
    yield takeEvery(TRY_LOG_OUT, logoutSaga);
}