import {recordSaga} from "../recordSaga";
import {fetchAddressListSaga} from "./addressSaga";
import {FETCH_ADDRESS_LIST_SUCCESS, tryFetchAddress} from "./addressActions";

jest.mock("../../../util/server/serverConversation", () => ({getAddressList: jest.fn(() => [])}));

describe("addressSaga", () => {
    it("fetch coordinates", async () => {
        const dispatched = await recordSaga(
            fetchAddressListSaga(),
            tryFetchAddress()
        );

        expect(dispatched).toEqual(
            [
                {type: FETCH_ADDRESS_LIST_SUCCESS}
            ]);
    });
})