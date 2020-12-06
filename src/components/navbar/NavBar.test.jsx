import React from 'react';
import {render} from "@testing-library/react";
import NavBar from "./NavBar";
import renderer from "react-test-renderer";

const mockNavigateTo = jest.fn();
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("NavBar", () => {
    it("renders correctly", () => {
        const {container} = render(
            <NavBar navigateTo={mockNavigateTo}/>
        );
        expect(container.innerHTML).toMatch("Карта");
        expect(container.innerHTML).toMatch("Профиль");
        expect(container.innerHTML).toMatch("Выйти");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <NavBar navigateTo={mockNavigateTo}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
