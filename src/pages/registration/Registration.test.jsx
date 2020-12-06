import React from 'react';
import {render} from "@testing-library/react";
import Registration from "./Registration";
import {Profile} from "../profile/Profile";
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
            <Registration navigateTo={mockNavigateTo}/>
        );
        expect(container.innerHTML).toMatch("Регистрация");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <Registration navigateTo={mockNavigateTo}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});