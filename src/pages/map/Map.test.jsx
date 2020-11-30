import React from 'react';
import {render} from "@testing-library/react";
import Map from "./Map";
import MapBox from "../../components/mapbox/MapBox";

jest.mock("../../components/mapbox/MapBox", () => ({MapBox: () => <div>Map component</div>}));

describe("Map", () => {
    it("renders correctly", () => {
        const {container} = render(<Map/>);
        expect(container.innerHTML).toMatch("Карта");
    })
});