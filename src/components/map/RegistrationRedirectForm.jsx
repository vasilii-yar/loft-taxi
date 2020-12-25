import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./RegistrationRedirectForm.css"
import {withRouter} from "react-router-dom";

class RegistrationRedirectForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push("/profile");
    }

    render() {
        return (
            <Paper className="redirect-form-layout">
                <Box>
                    <form onSubmit={this.handleSubmit} className="redirect-form-content">
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h4">
                                    Заполните платежные данные
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    Укажите информацию о банковской карте, чтобы сделать заказ.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="redirect-button">
                                    <Button variant="contained" color="primary" type="submit" fullWidth>
                                        Перейти в профиль
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Paper>
        );
    }
}

export default withRouter(RegistrationRedirectForm);