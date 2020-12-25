import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {Logo} from 'loft-taxi-mui-theme';
import './NavBar.css';
import {tryLogOut} from "../../redux/modules/auth/authActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Box} from "@material-ui/core";


const NavBar = (props) => {

    const logOut = () => {
        props.tryLogOut();
        props.history.push("/login");
    }

    const goToMap = () => {
        props.history.push("/map");
    }

    const goToProfile = () => {
        props.history.push("/profile");
    }

    return (
        <AppBar color="inherit" position={"static"}>
            <Toolbar className="nav-toolbar">
                <Logo/>
                <Box>
                    <Button color="inherit" onClick={goToMap}>Карта</Button>
                    <Button color="inherit" onClick={goToProfile}>Профиль</Button>
                    <Button color="inherit" onClick={logOut}>Выйти</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default connect(
    null,
    {tryLogOut}
)(withRouter(NavBar));