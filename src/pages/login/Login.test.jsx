import React from 'react';
import {render} from "@testing-library/react";
import Login from "./Login";
import {AuthProvider} from "../../util/AuthContext";

const mockNavigateTo = jest.fn();
jest.mock("../../components/loginform/LoginForm", () => ({LoginForm: () => <div>Форма входа</div>}));

describe("Login", () => {
    it("renders correctly", () => {
        const {container} = render(
            <AuthProvider>
                <Login navigateTo={mockNavigateTo}/>
            </AuthProvider>
        );

        expect(container.innerHTML).toMatch("Форма входа");
    })
});