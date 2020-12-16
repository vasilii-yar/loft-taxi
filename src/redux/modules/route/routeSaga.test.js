import {recordSaga} from "../recordSaga";
import {fetchCoordinatesSaga, routeSaga} from "./routeSaga";
import {ROUTING_SUCCESS, tryRouting} from "./routeActions";

jest.mock("../../../util/server/serverConversation", () => ({getCoordinates: jest.fn(() => [])}));

describe("routeSaga", () => {
    it("fetch coordinates", async () => {
        const dispatched = await recordSaga(
            fetchCoordinatesSaga,
            tryRouting("test", "test")
        );

        expect(dispatched).toEqual(
            [
                {type: ROUTING_SUCCESS}
            ]);
    });
})