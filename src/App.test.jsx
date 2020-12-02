import React from 'react';
import {render} from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";
import {AuthProvider} from "./util/AuthContext";

jest.mock("./pages/login/Login", () => ({Login: () => <div>Login component</div>}));
jest.mock("./pages/map/Map", () => ({Map: () => <div>Map component</div>}));
jest.mock("./pages/profile/Profile", () => ({Profile: () => <div>Profile component</div>}));
jest.mock("./pages/registration/Registration", () => ({Registration: () => <div>Registration component</div>}));

describe("App", () => {
    it("renders correctly", () => {
        const {container} = render(
            <AuthProvider>
                <App/>
            </AuthProvider>
        );
        expect(container.innerHTML).toMatch("Войти");
    });

    it("renders correctly check by snapshot", () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
