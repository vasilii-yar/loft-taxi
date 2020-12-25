import React, {useEffect, useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {Box} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./CardLayout.css"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {fetchProfileData, uploadProfileData} from "../../redux/modules/profile/profileActions";
import Typography from "@material-ui/core/Typography";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import {FieldsValidateErrorMessages} from "../fieldsvalidate/FieldsValidateErrorMessages";
import InputMask from "react-input-mask";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const CreditCard = (props) => {
    const [state, setState] = useState({
        cvc: "",
        expiry: "",
        name: "",
        number: "",
        focus: ""
    })

    const {register, handleSubmit, errors} = useForm();

    const history = useHistory();

    const expiryMask = [/[0-1]/, /[0-9]/, "/", /[0-9]/, /[0-9]/];

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        });
    }

    const handleExpireInput = (e) => {
        let {name, value} = e.target;
        let month = value.substring(0, 2);

        if (!isNaN(month)) {
            month = parseInt(month);
            if (month > 12) {
                value = 12 + value.substring(2, 5);
            }
        }

        setState({
            ...state,
            [name]: value
        });
    }

    const handleCvcInput = (e) => {
        const {name, value} = e.target;

        if (value.length > 3) {
            return;
        }
        setState({
            ...state,
            [name]: value
        });
    }

    const expireValidate = (value) => {
        const [month, year] = value.split("/");

        if (isNaN(month) || isNaN(year)) {
            return false;
        }

        return true;
    }

    const creditCardValidate = (value) => {
        if (value.replaceAll(" ", "").length < 16) {
            return false;
        }
        return true;
    }

    const createExpireFromString = (value) => {
        if (value === "") {
            return value;
        }

        const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

        const isString = typeof value === "string";
        const isDate = dateFormat.test(value);

        if (isString && isDate) {
            const dateValue = new Date(value);
            const year = dateValue.getFullYear().toString();
            const month = dateValue.getMonth() + 1;
            const monthStr = (month < 10) ? "0" + month : month.toString();

            return monthStr + "/" + year.substring(2, 4);
        } else {
            return "01/01";
        }
    }

    const onSubmit = (data) => {
        const cardNum = state.number.replaceAll(" ", "");
        const monthStr = state.expiry.substring(0, 2);
        const month = parseInt(monthStr) - 1;
        const yearStr = state.expiry.substring(3, 5);
        const year = parseInt(yearStr) + 2000;
        const expireDate = new Date(year, month, 1, 0, 0, 0, 0);

        const cardData = {
            cardNumber: cardNum,
            expiryDate: expireDate,
            cardName: state.name,
            cvc: state.cvc,
            token: ""
        }
        props.uploadProfileData(cardData);
        history.push("/map");
    }

    useEffect(() => {
        props.fetchProfileData();
        const expire = createExpireFromString(props.expiryDate);

        setState({
            ...state,
            cvc: props.cvc,
            expiry: expire,
            name: props.cardName,
            number: props.cardNumber
        });
    }, [])

    return (
        <Paper className="credit-card-layout">
            <Box className="credit-card-header">
                <Typography variant="h4" align="center">
                    Профиль
                </Typography>
                <Typography align="center">
                    Способ оплаты
                </Typography>
            </Box>
            <Box id="PaymentForm">
                <Cards
                    cvc={state.cvc}
                    expiry={state.expiry}
                    focused={state.focus}
                    name={state.name}
                    number={state.number}
                />
                <form onSubmit={handleSubmit(onSubmit)} className="input-fields">
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <InputMask mask="9999 9999 9999 9999" maskPlaceholder=" " value={state.number} onChange={handleInputChange}>
                                <TextField
                                    inputRef={register({
                                        required: true,
                                        validate: creditCardValidate
                                    })}
                                    name="number"
                                    type="text"
                                    fullWidth
                                    error={errors.number}
                                    label="Номер карты"
                                />
                            </InputMask>
                            <FieldsValidateErrorMessages error={errors.number}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                inputRef={register({required: true})}
                                name="name"
                                type="text"
                                value={state.name}
                                onChange={handleInputChange}
                                fullWidth
                                error={errors.name}
                                label="Имя владельца"
                            />
                            <FieldsValidateErrorMessages error={errors.name}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row">
                                <Grid item xs={5}>
                                    <InputMask mask={expiryMask} maskPlaceholder="mm/yy" value={state.expiry}
                                               onChange={handleExpireInput}>
                                        <TextField
                                            inputRef={register({
                                                required: true,
                                                validate: expireValidate
                                            })}
                                            name="expiry"
                                            type="text"
                                            fullWidth
                                            error={errors.expiry}
                                            label="Срок действия"
                                        />
                                    </InputMask>
                                    <FieldsValidateErrorMessages error={errors.expiry}/>
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        inputRef={register({
                                            required: true,
                                            minLength: 3
                                        })}
                                        name="cvc"
                                        type="number"
                                        value={state.cvc}
                                        onChange={handleCvcInput}
                                        fullWidth
                                        error={errors.cvc}
                                        label="CVC"
                                    />
                                    <FieldsValidateErrorMessages error={errors.cvc}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="save-button">
                                <Button variant="contained" color="primary" type="submit">
                                    Сохранить
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
    return (
        {
            cardNumber: state.profile.cardNumber,
            expiryDate: state.profile.expiryDate,
            cardName: state.profile.cardName,
            cvc: state.profile.cvc
        }
    )
}

export default connect(
    mapStateToProps,
    {uploadProfileData, fetchProfileData}
)(CreditCard);