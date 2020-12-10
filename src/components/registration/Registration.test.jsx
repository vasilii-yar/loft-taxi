import React from 'react';
import {render} from "@testing-library/react";
import Registration from "./Registration";
import {Profile} from "../profile/Profile";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import {BrowserRouter} from "react-router-dom";

jest.mock("../navbar/NavBar", () => (
    {
        __esModule: true,
        default: () => <div>Регистрация</div>
    }
));
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("Registration", () => {
    it("renders correctly", () => {
        const {container} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Registration/>
                </Provider>
            </BrowserRouter>
        );
        expect(container.innerHTML).toMatch("Регистрация");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Provider store={store}>
                    <Registration/>
                </Provider>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});