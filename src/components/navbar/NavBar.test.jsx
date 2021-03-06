import React from 'react';
import {render} from "@testing-library/react";
import NavBar from "./NavBar";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import {BrowserRouter} from "react-router-dom";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("NavBar", () => {
    it("renders correctly", () => {
        const {container} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <NavBar/>
                </Provider>
            </BrowserRouter>
        );
        expect(container.innerHTML).toMatch("Карта");
        expect(container.innerHTML).toMatch("Профиль");
        expect(container.innerHTML).toMatch("Выйти");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Provider store={store}>
                    <NavBar/>
                </Provider>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
