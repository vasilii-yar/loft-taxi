import React from 'react';
import App from "./App";
import {render} from "@testing-library/react";
import {AuthProvider} from "./util/AuthContext";

jest.mock("./pages/map/Map", () => (
    {
        __esModule: true,
        default: () => <div>Карта</div>
    }
));
jest.mock("./pages/profile/Profile", () => (
    {
        __esModule: true,
        default: () => <div>Профиль</div>
    }
));
jest.mock("./pages/login/Login", () => (
    {
        __esModule: true,
        default: () => <div>Логин</div>
    }
));
jest.mock("./pages/registration/Registration", () => (
    {
        __esModule: true,
        default: () => <div>Регистрация</div>
    }
));
describe("App", () => {
    it("renders correctly", () => {
        const {container} = render(
            <AuthProvider>
                <App/>
            </AuthProvider>
        );
        expect(container.innerHTML).toMatch("Логин");
    })
});
