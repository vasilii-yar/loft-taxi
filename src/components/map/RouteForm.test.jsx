import React from 'react';
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import renderer from "react-test-renderer";
import RouteForm from "./RouteForm";

describe("RouteForm", () => {
    it("renders correctly", () => {
        const {container} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <RouteForm/>
                </Provider>
            </BrowserRouter>
        );
        expect(container.innerHTML).toMatch("Вызвать такси");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Provider store={store}>
                    <RouteForm/>
                </Provider>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})