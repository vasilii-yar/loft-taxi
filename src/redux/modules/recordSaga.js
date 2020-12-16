import {runSaga} from "redux-saga";

export const recordSaga = async (saga, actionInitial = null) => {
    const dispatched = [];

    await runSaga(
        {
            dispatch: (action) => dispatched.push(action),
        },
        saga,
        actionInitial
    ).done;

    return dispatched;
}