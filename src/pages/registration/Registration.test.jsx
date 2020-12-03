import React from 'react';
import {render} from "@testing-library/react";
import Registration from "./Registration";
import {Profile} from "../profile/Profile";
import {AuthProvider} from "../../util/AuthContext";
import renderer from "react-test-renderer";

const mockNavigateTo = jest.fn();
jest.mock("../../components/navbar/NavBar", () => (
    {
        __esModule: true,
        default: () => <div>Регистрация</div>
    }
));
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("Registration", () => {
    it("renders correctly", () => {
        const {container} = render(
            <AuthProvider>
                <Registration navigateTo={mockNavigateTo}/>
            </AuthProvider>
            );
        expect(container.innerHTML).toMatch("Регистрация");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <AuthProvider>
                <Registration navigateTo={mockNavigateTo}/>
            </AuthProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});