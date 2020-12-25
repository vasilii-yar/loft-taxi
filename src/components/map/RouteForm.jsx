import React, {useEffect, useState} from 'react';
import Paper from "@material-ui/core/Paper";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete"
import TextField from "@material-ui/core/TextField";
import "./RouteForm.css";
import {connect} from "react-redux";
import {tryFetchAddress} from "../../redux/modules/address/addressActions";
import {clearRoute, tryRouting} from "../../redux/modules/route/routeActions";
import {useForm} from "react-hook-form";
import {FieldsValidateErrorMessages} from "../fieldsvalidate/FieldsValidateErrorMessages";

const RouteForm = (props) => {
    const [state, setState] = useState({
        fromValue: "",
        toValue: ""
    })

    const [errorText, setErrorText] = useState("");

    const [isInputValid, setIsInputValid] = useState(true);

    const [isRoutePrinted, setIsRoutePrinted] = useState(false);

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        if (isRoutePrinted) {
            setState({
                ...state,
                fromValue: "",
                toValue: ""
            })
            props.clearRoute();
            setIsRoutePrinted(false);
        } else {
            setIsRoutePrinted(true);
            props.tryRouting(data.fromValue, data.toValue);
        }
    }

    const onFromChange = (event, newValue) => {
        setState({...state, fromValue: newValue});
        errors.fromValue = false;
    }

    const onToChange = (event, newValue) => {
        setState({...state, toValue: newValue});
        errors.toValue = false;
    }

    const validate = (value) => {
        const from = state.fromValue;
        const to = state.toValue;

        if (from === to) {
            return false;
        }

        return true;
    }

    useEffect(() => {
        props.tryFetchAddress();
    }, [])

    return (
        <Paper className="route-form-layout">
            <Box>
                <form onSubmit={handleSubmit(onSubmit)} className="route-form-content">
                    <Grid container direction="column" spacing={4}>
                        <Grid item xs={12}>
                            <Autocomplete
                                id="from-combo"
                                options={props.addressList}
                                getOptionLabel={(option) => option}
                                value={state.fromValue}
                                onInputChange={onFromChange}
                                renderInput={(params) => <TextField {...params}
                                                                    inputRef={register({
                                                                        required: true,
                                                                        validate: validate
                                                                    })}
                                                                    name="fromValue"
                                                                    label="Откуда"
                                                                    variant="standard"
                                                                    error={errors.fromValue}
                                />}
                            />
                            <FieldsValidateErrorMessages error={errors.fromValue}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                id="to-combo"
                                options={props.addressList}
                                getOptionLabel={(option) => option}
                                value={state.toValue}
                                onChange={onToChange}
                                renderInput={(params) => <TextField {...params}
                                                                    inputRef={register({
                                                                        required: true,
                                                                        validate: validate
                                                                    })}
                                                                    name="toValue"
                                                                    label="Куда"
                                                                    variant="standard"
                                                                    error={errors.toValue}
                                />}
                            />
                            <FieldsValidateErrorMessages error={errors.toValue}/>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="get-taxi-button">
                                <Button variant="contained" color="primary" type="submit" fullWidth>
                                    {isRoutePrinted ? "Сбросить маршрут" : "Вызвать такси"}
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Paper>
    );
}

const mapStateToProps = (state) => {
    return {
        addressList: state.address.addressList
    }
}

export default connect(
    mapStateToProps,
    {tryFetchAddress, tryRouting, clearRoute}
)(RouteForm);