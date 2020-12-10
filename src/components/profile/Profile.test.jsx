import React from 'react';
import {render} from "@testing-library/react";
import Profile from "./Profile";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

jest.mock("../navbar/NavBar", () => (
    {
        __esModule: true,
        default: () => <div>Профиль</div>
    }
));
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("Profile", () => {
    it("renders correctly", () => {
        const {container} = render(
            <Provider store={store}>
                <Profile/>
            </Provider>
        );
        expect(container.innerHTML).toMatch("Профиль");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <Profile/>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});