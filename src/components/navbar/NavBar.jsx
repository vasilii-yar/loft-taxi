import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {Logo} from 'loft-taxi-mui-theme';
import './NavBar.css';
import PropTypes from "prop-types";
import {withAuth} from "../../util/AuthContext";


class NavBar extends React.Component {
    static propTypes = {
        logOut: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired
    }

    logOut = () => {
       this.props.logOut();
       this.props.navigateTo("login");
    }

    goToMap = () => {
        this.props.navigateTo("map")
    }

    goToProfile = () => {
        this.props.navigateTo("profile")
    }

    render() {
        return (
            <AppBar color="inherit" position={"static"}>
                <Toolbar>
                    <Logo/>
                    <div className="nav-buttons">
                        <Button color="inherit" onClick={this.goToMap}>Карта</Button>
                        <Button color="inherit" onClick={this.goToProfile}>Профиль</Button>
                        <Button color="inherit" onClick={this.logOut}>Выйти</Button>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withAuth(NavBar);