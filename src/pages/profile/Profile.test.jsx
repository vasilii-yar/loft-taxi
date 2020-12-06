import React from 'react';
import {render} from "@testing-library/react";
import Profile from "./Profile";
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
            <Profile navigateTo={mockNavigateTo}/>
        );
        expect(container.innerHTML).toMatch("Профиль");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <Profile navigateTo={mockNavigateTo}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});