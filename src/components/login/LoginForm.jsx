import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "./LoginForm.css"
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {tryAuth} from "../../redux/modules/auth/authActions";
import {Link, withRouter} from "react-router-dom";

class LoginForm extends React.Component {
    static propTypes = {
        tryAuth: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.tryAuth(this.state.login, this.state.password);
    }

    goToMap = () => {
        this.props.history.push("/map");
    }

    goToRegistration = () => {
        this.props.history.push("/registration");
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
        return (
            this.props.isLoggedIn ?
                (
                    <>
                        {this.goToMap()}
                    </>
                )
                :
                (
                    <Paper>
                        <Container>
                            <Typography variant="h4" gutterBottom className="login-header">
                                Войти
                            </Typography>
                            <form onSubmit={this.handleSubmit}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Новый пользователь? <Link to="/registration">Зарегистрируйтесь</Link>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="login">Пользователь</InputLabel>
                                            <Input
                                                id="login"
                                                name="login"
                                                type="email"
                                                value={this.state.login}
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
                                                value={this.state.password}
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
                )
        );
    }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    {tryAuth}
)(withRouter(LoginForm));