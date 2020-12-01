import React from 'react';
import {act, render} from "@testing-library/react";
import {AuthProvider, Context} from "./AuthContext";

describe("AuthContext", () => {
    describe("#login", () => {
        it("set isLoggedIn to true", () => {
            let isLoggedIn;
            let logIn;

            render(
                <AuthProvider>
                    <Context.Consumer>
                        {
                            value => {
                                isLoggedIn = value.isLoggedIn;
                                logIn = value.logIn;
                            }
                        }
                    </Context.Consumer>
                </AuthProvider>
            );

            expect(isLoggedIn).toBe(false);
            act(
                () => logIn()
            );
            expect(isLoggedIn).toBe(true);
        })
    });

    describe("#logOut", () => {
        it("set isLoggedIn to false", () => {
           let isLoggedIn;
           let logIn;
           let logOut;

           render(
             <AuthProvider>
                 <Context.Consumer>
                     {
                         value => {
                             isLoggedIn = value.isLoggedIn;
                             logIn = value.logIn;
                             logOut = value.logOut;
                         }
                     }
                 </Context.Consumer>
             </AuthProvider>
           );

            expect(isLoggedIn).toBe(false);
            act(
                () => {
                    logIn();
                    logOut();
                }
            );
            expect(isLoggedIn).toBe(false);
        });
    });
})