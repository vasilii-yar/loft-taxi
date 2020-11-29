import React from 'react';
import {render} from "@testing-library/react";
import Login from "../pages/Login";

describe("Login", () => {
    it("renders correctly", () => {
        const {getByLabelText, getByText, getAllByText} = render(<Login/>);

        expect(getByLabelText("Имя пользователя:")).toHaveAttribute("name", "login");
        expect(getByLabelText("Пароль:")).toHaveAttribute("name", "password");
        expect(getByText("Зарегистрируйтесь")).toBeInTheDocument();
        expect(getAllByText("Войти").length.toString()).toMatch("2");
    })
});