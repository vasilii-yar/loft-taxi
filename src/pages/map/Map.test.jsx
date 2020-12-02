import React from 'react';
import {render} from "@testing-library/react";
import Map from "./Map";
import {AuthProvider} from "../../util/AuthContext";

const mockNavigateTo = jest.fn();
jest.mock("../../components/mapbox/MapBox", () => ({MapBox: () => <div>Карта</div>}));
jest.mock("../../components/navbar/NavBar", () => ({NavBar: () => <div>NavBar component</div>}));

describe("Map", () => {
    it("renders correctly", () => {
        const {container} = render(
            <AuthProvider>
                <Map navigateTo={mockNavigateTo}/>
            </AuthProvider>
            );
        expect(container.innerHTML).toMatch("Карта");
    })
});