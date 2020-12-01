import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "./LoginForm.css"
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
import {withAuth} from "../../util/AuthContext";

class LoginForm extends React.Component {
    static propTypes = {
        logIn: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }
    }

    handleSubmit = () => {
        this.props.logIn(this.state.login, this.state.password);
        this.props.navigateTo("map");
    }

    goToRegistration = () => {
        this.props.navigateTo("registration")
    }



    render() {
        return (
            <Paper>
                <Container>
                    <Typography variant="h4" gutterBottom className="login-header">
                        Войти
                    </Typography>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                                <Typography>
                                    Новый пользователь? <Link href="#"
                                                              onClick={this.goToRegistration}>Зарегистрируйтесь</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="login">Пользователь</InputLabel>
                                    <Input
                                        id="login"
                                        name="login"
                                        type="email"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="password">Пароль</InputLabel>
                                    <Input
                                        id="password"
                                        name="password"
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

export default withAuth(LoginForm);