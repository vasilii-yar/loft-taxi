import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {clearRoute, makeOrderSuccess} from "../../redux/modules/route/routeActions";
import "./OrderSuccessForm.css";

const OrderSuccessForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.makeOrderSuccess(false);
        props.clearRoute();
    }

    return (
        <Paper className="order-success-form-layout">
            <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            Заказ размещён
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Сделать новый заказ
                        </Button>
                    </Grid>
                </Grid>
            </form>

        </Paper>
    )
}

export default connect(
    null,
    {makeOrderSuccess, clearRoute}
)(OrderSuccessForm);