import React from 'react';
import {render} from "@testing-library/react";
import LoginForm from "./LoginForm";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";

const mockNavigateTo = jest.fn();
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("LoginForm", () => {
    it("renders correctly", () => {
        const {getByLabelText, getByText, getAllByText} = render(
            <LoginForm navigateTo={mockNavigateTo}/>
        );

        expect(getByLabelText("Пользователь")).toBeInTheDocument();
        expect(getByLabelText("Пароль")).toBeInTheDocument();
        expect(getByText("Зарегистрируйтесь")).toBeInTheDocument();
        expect(getAllByText("Войти").length.toString()).toMatch("2");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <LoginForm navigateTo={mockNavigateTo}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});