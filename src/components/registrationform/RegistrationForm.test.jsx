import React from 'react';
import {render} from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

describe("Profile", () => {
    it("renders correctly", () => {
        const {container} = render(<RegistrationForm/>);
        expect(container.innerHTML).toMatch("Регистрация");
    })
});