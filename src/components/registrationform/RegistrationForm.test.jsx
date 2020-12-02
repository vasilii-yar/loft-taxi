import React from 'react';
import {render} from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";
import {AuthProvider} from "../../util/AuthContext";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";

const mockNavigateTo = jest.fn();
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("Profile", () => {
    it("renders correctly", () => {
        const {container, getByLabelText, getByText, getAllByText} = render(
            <AuthProvider>
                <RegistrationForm navigateTo={mockNavigateTo}/>
            </AuthProvider>
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
            <AuthProvider>
                <RegistrationForm navigateTo={mockNavigateTo}/>
            </AuthProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});