import React from 'react';
import {render} from "@testing-library/react";
import Map from "./Map";
import renderer from "react-test-renderer";

jest.mock("./MapBox", () => (
    {
        __esModule: true,
        default: () => <div>Карта</div>
    }
));
jest.mock("../navbar/NavBar", () => (
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
            <Map />
        );
        expect(container.innerHTML).toMatch("Карта");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <Map />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});