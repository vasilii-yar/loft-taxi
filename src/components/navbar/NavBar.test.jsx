import React from 'react';
import {render} from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
    it("renders correctly", () => {
        const {container} = render(<NavBar/>);
        expect(container.innerHTML).toMatch("Карта");
        expect(container.innerHTML).toMatch("Профиль");
        expect(container.innerHTML).toMatch("Выйти");
    })
});
