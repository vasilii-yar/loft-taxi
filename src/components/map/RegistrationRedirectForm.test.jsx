import React from 'react';
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import renderer from "react-test-renderer";
import RegistrationRedirectForm from "./RegistrationRedirectForm";

describe("RegistrationRedirectForm", () => {
    it("renders correctly", () => {
        const {container} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <RegistrationRedirectForm/>
                </Provider>
            </BrowserRouter>
        );
        expect(container.innerHTML).toMatch("Перейти в профиль");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Provider store={store}>
                    <RegistrationRedirectForm/>
                </Provider>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})