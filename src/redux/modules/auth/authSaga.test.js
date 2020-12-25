import {recordSaga} from "../recordSaga";
import {authenticateSaga, registerSaga} from "./authSaga";
import {LOG_IN, tryAuth, tryRegistering} from "./authActions";
import {FETCH_PROFILE_DATA} from "../profile/profileActions";

jest.mock("../../../util/server/serverConversation", () => (
    {
        doLogin: () => Promise.resolve({success: true, token: "testToken"}),
        doRegister: () => Promise.resolve({success: true, token: "testToken"})
    }));

describe("authSaga", () => {
    it("authenticates through api", async () => {
        const dispatched = await recordSaga(
            authenticateSaga,
            tryAuth("testLogin", "testPassword")
        );

        expect(dispatched).toEqual(
            [
                {
                    type: LOG_IN,
                    payload: "testToken"
                },
                {
                    type: FETCH_PROFILE_DATA
                }
            ]);
    });

    it("registering through api", async () => {
        const dispatched = await recordSaga(
            registerSaga,
            tryRegistering("testmail", "testpass", "name", "surname")
        );

        expect(dispatched).toEqual(
            [
                {
                    type: LOG_IN,
                    payload: "testToken"
                }
            ]);

    });
})