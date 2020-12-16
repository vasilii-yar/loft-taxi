import {recordSaga} from "../recordSaga";
import {authenticateSaga, registerSaga} from "./authSaga";
import {LOG_IN, tryAuth, tryRegistering} from "./authActions";

jest.mock("../../../util/server/serverConversation", () => ({doLogin: jest.fn(() => ({success: true}))}))

describe("authSaga", () => {
    it("authenticates through api", async () => {
        const dispatched = await recordSaga(
            authenticateSaga,
            tryAuth("testLogin", "testPassword")
        );

        expect(dispatched).toEqual(
            [
                {type: LOG_IN}
            ]);
    });

    it("registering through api", async () => {
        const dispatched = await recordSaga(
            registerSaga(),
            tryRegistering("testmail", "testpass", "name", "surname")
        );

        expect(dispatched).toEqual(
            [
                {type: LOG_IN}
            ]);

    });
})