import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Logo} from "loft-taxi-mui-theme";
import "./Registration.css"
import RegistrationForm from "../../components/registrationform/RegistrationForm";

export default class Registration extends React.Component {

    render() {
        return (
            <Grid container direction="row" justify="center" alignItems="center" className={"registration-bundle"}>
                <Grid item xs={2}>
                    <Logo animated={true} white={true}/>
                </Grid>
                <Grid item xs={4}>
                    <RegistrationForm/>
                </Grid>
            </Grid>
        )
    }
}