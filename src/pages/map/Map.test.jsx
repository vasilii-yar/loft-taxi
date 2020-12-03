import React from 'react';
import {render} from "@testing-library/react";
import Map from "./Map";
import {AuthProvider} from "../../util/AuthContext";
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
            <AuthProvider>
                <Map navigateTo={mockNavigateTo}/>
            </AuthProvider>
        );
        expect(container.innerHTML).toMatch("Карта");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <AuthProvider>
                <Map navigateTo={mockNavigateTo}/>
            </AuthProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});