import {all} from "@redux-saga/core/effects";
import {authSaga} from "./modules/auth/authSaga";
import {profileSaga} from "./modules/profile/profileSaga";
import {addressSaga} from "./modules/address/addressSaga";
import {routeSaga} from "./modules/route/routeSaga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        profileSaga(),
        addressSaga(),
        routeSaga()
    ])
}