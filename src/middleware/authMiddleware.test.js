import {authMiddleware} from "./authMiddleware";
import {TRY_AUTH, tryAuth} from "../actions/authActions";
import {doLogin} from "../util/server/serverConversation";


jest.mock("../util/server/serverConversation", () => ({
    doLogin: jest.fn(() => (
        {success: true}
    ))
}));

describe("authMiddleware", () => {
    describe("#TRY_AUTH", () => {
        it("successfully authenticate", async () => {
            const dispatch = jest.fn();

            await authMiddleware({dispatch})()(
                tryAuth("test", "test")
            );

            expect(doLogin).toBeCalledWith("test", "test");
            expect(dispatch).toBeCalledWith({
                type: TRY_AUTH
            })
        })
    })
})