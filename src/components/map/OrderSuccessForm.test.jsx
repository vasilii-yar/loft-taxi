import React from 'react';
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import renderer from "react-test-renderer";
import OrderSuccessForm from "./OrderSuccessForm";

describe("OrderSuccessForm", () => {
    it("renders correctly", () => {
        const {container} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <OrderSuccessForm/>
                </Provider>
            </BrowserRouter>
        );
        expect(container.innerHTML).toMatch("Заказ размещён");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Provider store={store}>
                    <OrderSuccessForm/>
                </Provider>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})