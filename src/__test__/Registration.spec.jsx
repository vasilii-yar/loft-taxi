import React from 'react';
import {render} from "@testing-library/react";
import Registration from "../pages/Registration";

describe("Registration", () => {
    it("renders correctly", () => {
        const {getByLabelText, getAllByRole} = render(<Registration/>);
        const [button1, button2] = getAllByRole("button");

        expect(getByLabelText("Адрес электронной почты:")).toHaveAttribute("name", "email");
        expect(getByLabelText("Имя:")).toHaveAttribute("name", "name");
        expect(getByLabelText("Фамилия:")).toHaveAttribute("name", "surname");
        expect(getByLabelText("Пароль:")).toHaveAttribute("name", "password");
        expect(button1.innerHTML).toMatch("Войти");
        expect(button2.getAttribute("value")).toMatch("Войти");
    })
});