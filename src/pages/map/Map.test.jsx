import React from 'react';
import {render} from "@testing-library/react";
import Map from "./Map";
import MapBox from "../../components/mapbox/MapBox";
import NavBar from "../../components/navbar/NavBar";

jest.mock("../../components/mapbox/MapBox", () => ({MapBox: () => <div>Map component</div>}));
jest.mock("../../components/navbar/NavBar", () => ({NavBar: () => <div>NavBar component</div>}));

describe("Map", () => {
    it("renders correctly", () => {
        const {container} = render(<Map/>);
        expect(container.innerHTML).toMatch("Карта");
    })
});