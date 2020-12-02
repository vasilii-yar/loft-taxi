import React from 'react';
import {render} from "@testing-library/react";
import {Profile} from "./Profile";
import {AuthProvider} from "../../util/AuthContext";

const mockNavigateTo = jest.fn();
jest.mock("../../components/navbar/NavBar", () => ({NavBar: () => <div>Профиль</div>}));

describe("Profile", () => {
    it("renders correctly", () => {
        const {container} = render(
            <AuthProvider>
                <Profile navigateTo={mockNavigateTo}/>
            </AuthProvider>
            );
        expect(container.innerHTML).toMatch("Профиль");
    })
});