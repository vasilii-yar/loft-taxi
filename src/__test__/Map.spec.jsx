import React from 'react';
import {render} from "@testing-library/react";
import {Map} from "../pages/Map";

describe("Map", () => {
    it("renders correctly", () => {
        const {container} = render(<Map/>);
        expect(container.innerHTML).toMatch("Map");
    })
});