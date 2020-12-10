import React from 'react';
import {render} from "@testing-library/react";
import LoginForm from "./LoginForm";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";
import {store} from "../../redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("LoginForm", () => {
    it("renders correctly", () => {
        const {getByLabelText, getByText, getAllByText} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <LoginForm/>
                </Provider>
            </BrowserRouter>
        );

        expect(getByLabelText("Пользователь")).toBeInTheDocument();
        expect(getByLabelText("Пароль")).toBeInTheDocument();
        expect(getByText("Зарегистрируйтесь")).toBeInTheDocument();
        expect(getAllByText("Войти").length.toString()).toMatch("2");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Provider store={store}>
                    <LoginForm/>
                </Provider>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});