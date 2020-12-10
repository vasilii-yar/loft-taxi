import {authMiddleware} from "./authMiddleware";
import {LOG_IN, TRY_AUTH, tryAuth} from "../modules/auth/authActions";
import {doLogin} from "../../util/server/serverConversation";


/*jest.mock("../util/server/serverConversation", () => ({
    doLogin: jest.fn( () => (
        {success: true}
    ))
}));*/
/*const server = jest.genMockFromModule("../util/server/serverConversation");
server.doLogin.mockReturnValue(Promise.resolve({success: true}));

const next = jest.fn();*/

jest.mock("../util/server/serverConversation");
const mockedDoLogin = doLogin.mockImplementation((login, password) => {
    return {success: true}
});
const next = jest.fn();

describe("authMiddleware", () => {
    describe("#TRY_AUTH", () => {
        it("successfully authenticate", async () => {
            const dispatch = jest.fn();

            await authMiddleware({dispatch})(next)(
                tryAuth("test", "test")
            );

            expect(mockedDoLogin).toBeCalledWith("test", "test");
            expect(dispatch).toBeCalledWith({
                type: LOG_IN
            })
        })
    })
})