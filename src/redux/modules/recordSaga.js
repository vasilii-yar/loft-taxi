import {runSaga} from "redux-saga";

export const recordSaga = async (saga, actionInitial = null, state) => {
    const dispatched = [];

    await runSaga(
        {
            dispatch: (action) => dispatched.push(action),
            getState: () => state
        },
        saga,
        actionInitial
    ).toPromise();

    return dispatched;
}