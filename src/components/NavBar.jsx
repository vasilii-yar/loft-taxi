import React from 'react';
import AppBar from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {Logo} from 'loft-taxi-mui-theme';
import './css/NavBar.css';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position={"static"}>
                <Toolbar>
                    <Logo/>
                    <div className={"nav-buttons"}>
                        <Button color={"black"}>Карта</Button>
                        <Button color={"black"}>Профиль</Button>
                        <Button color={"black"}>Выйти</Button>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}