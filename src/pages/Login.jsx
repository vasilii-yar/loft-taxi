import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Logo} from 'loft-taxi-mui-theme';
import LoginForm from "../components/LoginForm";
import "../css/Login.css"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container direction="row" justify="center" alignItems="center" className={"login-bundle"}>
                <Grid item xs={2}>
                    <Logo white={true}/>
                </Grid>
                <Grid item xs={4}>
                    <LoginForm/>
                </Grid>
            </Grid>
        );
    }
}