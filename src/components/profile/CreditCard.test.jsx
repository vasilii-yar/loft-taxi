import React from 'react';
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import renderer from "react-test-renderer";
import CreditCard from "./CreditCard";

describe("CreditCard", () => {
    it("renders correctly", () => {
        const {container} = render(
            <Provider store={store}>
                <CreditCard/>
            </Provider>
        );
        expect(container.innerHTML).toMatch("Профиль");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <CreditCard/>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})