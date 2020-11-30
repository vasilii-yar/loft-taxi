import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import "./RegistrationForm.css";
import PropTypes from "prop-types";

export default class RegistrationForm extends React.Component {
    static propTypes = {
        logIn: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            surname: "",
            password: ""
        }
    }

    handleSubmit = () => {
        this.props.logIn(this.state.email, this.state.password);
    }

    goToLogin = () => {
        this.props.navigateTo("login");
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(
            {[name]: value}
        )
    }

    render() {
        return(
            <Paper>
                <Container>
                    <Typography variant="h4" gutterBottom className="login-header">
                        Регистрация
                    </Typography>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item xs={12}>
                                <Typography>
                                    Уже зарегистрированы? <Link href="#"
                                                              onClick={this.goToLogin}>Войти</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="login">Адрес электронной почты</InputLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="row">
                                    <Grid item xs={5}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="login">Имя</InputLabel>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={5}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="login">Фамилия</InputLabel>
                                            <Input
                                                id="surname"
                                                name="surname"
                                                type="text"
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="password">Пароль</InputLabel>
                                    <Input
                                        id="password"
                                        type="password"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </FormControl>
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
        );
    }
}