import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {theme} from "loft-taxi-mui-theme";
import {MuiThemeProvider} from "@material-ui/core";
import 'fontsource-roboto';
import {AuthProvider} from "./util/AuthContext";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <React.StrictMode>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </React.StrictMode>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
