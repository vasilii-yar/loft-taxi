import React from 'react';
import {render} from "@testing-library/react";
import Registration from "./Registration";
import {Profile} from "../profile/Profile";
import {AuthProvider} from "../../util/AuthContext";

const mockNavigateTo = jest.fn();
jest.mock("../../components/navbar/NavBar", () => ({NavBar: () => <div>Регистрация</div>}));

describe("Registration", () => {
    it("renders correctly", () => {
        const {container} = render(
            <AuthProvider>
                <Registration navigateTo={mockNavigateTo}/>
            </AuthProvider>
            );
        expect(container.innerHTML).toMatch("Регистрация");
    })
});