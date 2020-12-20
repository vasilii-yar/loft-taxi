import {recordSaga} from "../recordSaga";
import {fetchProfileDataSaga, uploadProfileDataSaga} from "./profileSaga";
import {fetchProfileData, UPDATE_PROFILE_DATA, UPDATE_PROFILE_DATA_STATE, uploadProfileData} from "./profileActions";


jest.mock("../../../util/server/serverConversation", () => ({
    saveCardData: () => Promise.resolve({success: true}),
    getCardData: () => Promise.resolve({})
}));

describe("profileSaga", () => {
    it("save card data", async () => {
        const dispatched = await recordSaga(
            uploadProfileDataSaga,
            uploadProfileData({test: "test"}),
            {auth: {token: "testToken"}}
        );

        expect(dispatched).toEqual(
            [
                {
                    type: UPDATE_PROFILE_DATA,
                    payload: {
                        test: "test",
                        token: "testToken"
                    }
                },
                {
                    type: UPDATE_PROFILE_DATA_STATE,
                    payload: true
                }
            ]);
    });

    it("fetch card data", async () => {
        const dispatched = await recordSaga(
            fetchProfileDataSaga,
            fetchProfileData(),
            {auth: {token: "testToken"}}
        );

        expect(dispatched).toEqual(
            [
                {
                    type: UPDATE_PROFILE_DATA,
                    payload: {}
                },
                {
                    type: UPDATE_PROFILE_DATA_STATE,
                    payload: true
                }
            ]);
    });
})