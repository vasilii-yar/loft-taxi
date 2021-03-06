import React from 'react';
import {render} from "@testing-library/react";
import Map from "./Map";
import renderer from "react-test-renderer";
import {store} from "../../redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

jest.mock("./MapBox", () => (
    {
        __esModule: true,
        default: () => <div>Карта</div>
    }
));
jest.mock("../navbar/NavBar", () => (
    {
        __esModule: true,
        default: () => <div>NavBar component</div>
    }
));
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("Map", () => {
    it("renders correctly", () => {
        const {container} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Map/>
                </Provider>
            </BrowserRouter>
        );
        expect(container.innerHTML).toMatch("Карта");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Provider store={store}>
                    <Map/>
                </Provider>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});