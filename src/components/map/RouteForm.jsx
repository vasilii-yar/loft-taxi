import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete"
import TextField from "@material-ui/core/TextField";
import "./RouteForm.css";
import {connect} from "react-redux";
import {tryFetchAddress} from "../../redux/modules/address/addressActions";
import {tryRouting} from "../../redux/modules/route/routeActions";

class RouteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromValue: "",
            toValue: "",
            inputValid: true,
            errorText: "",
            isRoutePrinted: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.isRoutePrinted) {
            this.setState({
                fromValue: "",
                toValue: "",
                isRoutePrinted: false
            })
        } else if (this.validate()) {
            this.props.tryRouting(this.state.fromValue, this.state.toValue);
            this.setState({
                isRoutePrinted: true
            });
        }
    }

    handleChange = (event, newValue) => {
        const {id} = event.target;
        const name = (id.indexOf("from-combo") === -1) ? "toValue" : "fromValue";
        this.setState({[name]: newValue});
    }

    validate = () => {
        const from = this.state.fromValue;
        const  to = this.state.toValue;

        if (from === "" || to === "") {
            this.setState({
                inputValid: false,
                errorText: "Ошибка! Заполните все поля!"
            })
            return false;
        }

        if (from === to) {
            this.setState({
                inputValid: false,
                errorText: "Ошибка! Значения должны отличаться!"
            })
            return false;
        }

        if (!this.state.inputValid) {
            this.setState({
                inputValid: true,
                errorText: ""
            })
        }

        return true;
    }

    componentDidMount() {
        this.props.tryFetchAddress();
    }

    render() {
        return (
            <Paper className="route-form-layout">
                <Box>
                    <form onSubmit={this.handleSubmit} className="route-form-content">
                        <Grid container direction="column" spacing={4}>
                            <Grid item xs={12}>
                                <Autocomplete
                                    id="from-combo"
                                    options={this.props.addressList}
                                    getOptionLabel={(option) => option}
                                    value={this.state.fromValue}
                                    onChange={this.handleChange}
                                    renderInput={(params) => <TextField {...params} label="Откуда"
                                                                        variant="standard"
                                                                        error={!this.state.inputValid}
                                                                        helperText={this.state.errorText}/>}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    id="to-combo"
                                    options={this.props.addressList}
                                    getOptionLabel={(option) => option}
                                    value={this.state.toValue}
                                    onChange={this.handleChange}
                                    renderInput={(params) => <TextField {...params} label="Куда"
                                                                        variant="standard"
                                                                        error={!this.state.inputValid}
                                                                        helperText={this.state.errorText}/>}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div className="get-taxi-button">
                                    <Button variant="contained" color="primary" type="submit" fullWidth>
                                        {this.state.isRoutePrinted ? "Сбросить маршрут" : "Вызвать такси"}
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

const mapStateToProps = (state) => {
    return {
        addressList: state.address.addressList
    }
}

export default connect(
    mapStateToProps,
    {tryFetchAddress, tryRouting}
)(RouteForm);