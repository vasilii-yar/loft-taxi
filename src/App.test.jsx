import React from 'react';
import {render} from "@testing-library/react";
import App from "./App";
import {fireEvent} from "@testing-library/react";

jest.mock("./Map", () => ({Map: () => <div>Map component</div>}));
/*jest.doMock("./Login", () => ({Login: () => <div>Login component</div>}));*/
jest.mock("./Profile", () => ({Profile: () => <div>Profile component</div>}));

describe("App", () => {
   it("renders correctly", () => {
      const {container} = render(<App/>);
      expect(container.innerHTML).toMatch("Войти");
   });

   describe("when click on nav buttons", () => {
      it("opens page", () => {
         const {getByText, container} = render(<App/>);

         fireEvent.click(getByText("Карта"));
         expect(container.innerHTML).toMatch("Map component");

         fireEvent.click(getByText("Профиль"));
         expect(container.innerHTML).toMatch("Profile component");

         //TODO Научиться мокать компоненты с пропсами.
         /*fireEvent.click(getByText("Логин"));
         expect(container.innerHTML).toMatch("Login component");*/
      });
   });
});