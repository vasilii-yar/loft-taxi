import {recordSaga} from "../recordSaga";
import {fetchProfileDataSaga, uploadProfileDataSaga} from "./profileSaga";
import {fetchProfileData, UPDATE_PROFILE_DATA, uploadProfileData} from "./profileActions";
import {LOG_IN} from "../auth/authActions";


jest.mock("../../../util/server/serverConversation", () => ({saveCardData: jest.fn(() => ({success: true}))}));
jest.mock("../../../util/server/serverConversation", () => ({getCardData: jest.fn(() => ({success: true}))}))

describe("profileSaga", () => {
    it("save card data", async () => {
        const dispatched = await recordSaga(
            uploadProfileDataSaga,
            uploadProfileData({test: "test"})
        );

        expect(dispatched).toEqual(
            [
                {type: UPDATE_PROFILE_DATA}
            ]);
    });

    it("fetch card data", async () => {
        const dispatched = await recordSaga(
            fetchProfileDataSaga,
            fetchProfileData()
        );

        expect(dispatched).toEqual(
            [
                {type: UPDATE_PROFILE_DATA}
            ]);
    });
})