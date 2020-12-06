import React from 'react';
import {render} from "@testing-library/react";
import Map from "./Map";
import renderer from "react-test-renderer";

const mockNavigateTo = jest.fn();
jest.mock("../../components/mapbox/MapBox", () => (
    {
        __esModule: true,
        default: () => <div>Карта</div>
    }
));
jest.mock("../../components/navbar/NavBar", () => (
    {
        __esModule: true,
        default: () => <div>NavBar component</div>
    }
));
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("Map", () => {
    it("renders correctly", () => {
        const {container} = render(
            <Map navigateTo={mockNavigateTo}/>
        );
        expect(container.innerHTML).toMatch("Карта");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <Map navigateTo={mockNavigateTo}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});