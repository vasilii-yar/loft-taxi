import React from 'react';
import App from "./App";
import {render} from "@testing-library/react";
import {AuthProvider} from "./util/AuthContext";
import {Provider} from "react-redux";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";

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
        const mockStore = {
            getState: () => ({
                auth: {isLoggedIn: true}
            }),
            subscribe: () => {
            },
            dispatch: () => {
            }
        }

        const history = createMemoryHistory();

        const {container} = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <App/>
                </Provider>
            </Router>
        );
        expect(container.innerHTML).toMatch("Логин");
    })
});
