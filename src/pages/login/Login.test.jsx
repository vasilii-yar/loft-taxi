import React from 'react';
import {render} from "@testing-library/react";
import Login from "./Login";
import renderer from "react-test-renderer";

const mockNavigateTo = jest.fn();
jest.mock("../../components/loginform/LoginForm",
    () => ({
        __esModule: true,
        default: () => <div>Форма входа</div>
    }));
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe("Login", () => {
    it("renders correctly", () => {
        const {container} = render(
            <Login/>
        );

        expect(container.innerHTML).toMatch("Форма входа");
    })

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(
            <Login/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

});