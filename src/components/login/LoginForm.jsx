import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./LoginForm.css"
import {connect} from "react-redux";
import {tryAuth} from "../../redux/modules/auth/authActions";
import {Link, useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import {FieldsValidateErrorMessages} from "../fieldsvalidate/FieldsValidateErrorMessages";
import {Box} from "@material-ui/core";

const LoginForm = (props) => {
    const [state, setState] = useState({
        login: "",
        password: ""
    })
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        props.tryAuth(data.login, data.password);
    }

    const goToMap = () => {
        history.push("/map");
    }

    const goToRegistration = () => {
        history.push("/registration");
    }

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setState({...state, [name]: value});
    }


    return (
        props.isLoggedIn ?
            (
                <>
                    {goToMap()}
                </>
            )
            :
            (
                <Paper className="login-form-layout">
                    <Box className="login-content-container">
                        <Typography variant="h4" gutterBottom className="login-header" align="center">
                            Войти
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <Typography>
                                        Новый пользователь? <Link to="/registration">Зарегистрируйтесь</Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField inputRef={register({required: true})}
                                               name="login"
                                               type="email"
                                               value={state.login}
                                               onChange={handleChange}
                                               fullWidth
                                               error={errors.login}
                                               label="Пользователь"
                                    />
                                    <FieldsValidateErrorMessages error={errors.login}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField inputRef={register({required: true})}
                                               name="password"
                                               type="password"
                                               value={state.password}
                                               onChange={handleChange}
                                               fullWidth
                                               error={errors.password}
                                               label="Пароль"
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
                    </Box>
                </Paper>
            )
    );
}

LoginForm.propTypes = {
    tryAuth: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return (
        {isLoggedIn: state.auth.isLoggedIn}
    )
}

export default connect(
    mapStateToProps,
    {tryAuth}
)(LoginForm);