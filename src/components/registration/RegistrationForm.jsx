import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import "./RegistrationForm.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {tryRegistering} from "../../redux/modules/auth/authActions";
import {Link, Redirect, withRouter} from "react-router-dom";
import {useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import {FieldsValidateErrorMessages} from "../fieldsvalidate/FieldsValidateErrorMessages";

const RegistrationForm = (props) => {
    const [state, setState] = useState({
        email: "",
        name: "",
        surname: "",
        password: ""
    });

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        props.tryRegistering(state.email, state.password, state.name, state.surname);
    }

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setState(
            {...state, [name]: value}
        );
    }

    return (
        props.isLoggedIn ?
            (
                <>
                    <Redirect to="/map"/>
                </>
            )
            :
            (
                <Paper>
                    <Container>
                        <Typography variant="h4" gutterBottom className="login-header">
                            Регистрация
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container direction={"column"} spacing={2}>
                                <Grid item xs={12}>
                                    <Typography>
                                        Уже зарегистрированы? <Link to="/login">Войти</Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField inputRef={register({required: true})}
                                               name="email"
                                               type="email"
                                               value={state.email}
                                               onChange={handleChange}
                                               fullWidth
                                               label="Адрес электронной почты"
                                               error={errors.email}
                                    />
                                    <FieldsValidateErrorMessages error={errors.email}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container direction="row">
                                        <Grid item xs={5}>
                                            <TextField inputRef={register({required: true})}
                                                       name="name"
                                                       type="text"
                                                       value={state.name}
                                                       onChange={handleChange}
                                                       fullWidth
                                                       label="Имя"
                                                       error={errors.name}
                                            />
                                            <FieldsValidateErrorMessages error={errors.name}/>
                                        </Grid>
                                        <Grid item xs={2}></Grid>
                                        <Grid item xs={5}>
                                            <TextField inputRef={register({required: true})}
                                                       name="surname"
                                                       type="text"
                                                       value={state.surname}
                                                       onChange={handleChange}
                                                       fullWidth
                                                       label="Фамилия"
                                                       error={errors.surname}
                                            />
                                            <FieldsValidateErrorMessages error={errors.surname}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField inputRef={register({required: true})}
                                               name="password"
                                               type="password"
                                               value={state.password}
                                               onChange={handleChange}
                                               fullWidth
                                               label="Пароль"
                                               error={errors.password}
                                    />
                                    <FieldsValidateErrorMessages error={errors.password}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="login-button">
                                        <Button variant="contained" color="primary" type="submit">
                                            Войти
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </Container>
                </Paper>
            )
    );
}

RegistrationForm.propTypes = {
    tryRegistering: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return (
        {isLoggedIn: state.auth.isLoggedIn}
    )
}

export default connect(
    mapStateToProps,
    {tryRegistering}
)(withRouter(RegistrationForm));