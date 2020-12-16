import React from 'react';
import {render} from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("Profile", () => {
    it("renders correctly", () => {
        const {container, getByLabelText, getByText, getAllByText} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <RegistrationForm/>
                </Provider>
            </BrowserRouter>
        );
        expect(container.innerHTML).toMatch("Регистрация");
        expect(getByText("Адрес электронной почты")).toBeInTheDocument();
        expect(getByText("Имя")).toBeInTheDocument();
        expect(getByText("Фамилия")).toBeInTheDocument();
        expect(getByText("Пароль")).toBeInTheDocument();
        expect(getAllByText("Войти").length.toString()).toMatch("2");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Provider store={store}>
                    <RegistrationForm/>
                </Provider>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});