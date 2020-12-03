import React from 'react';
import {render} from "@testing-library/react";
import Profile from "./Profile";
import {AuthProvider} from "../../util/AuthContext";
import renderer from "react-test-renderer";

const mockNavigateTo = jest.fn();
jest.mock("../../components/navbar/NavBar", () => (
    {
        __esModule: true,
        default: () => <div>Профиль</div>
    }
));
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("Profile", () => {
    it("renders correctly", () => {
        const {container} = render(
            <AuthProvider>
                <Profile navigateTo={mockNavigateTo}/>
            </AuthProvider>
        );
        expect(container.innerHTML).toMatch("Профиль");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <AuthProvider>
                <Profile navigateTo={mockNavigateTo}/>
            </AuthProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});