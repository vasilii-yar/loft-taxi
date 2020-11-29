import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "../css/LoginForm.css"

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }
    }

    handleSubmit = () => {

    }

    goToRegistration = () => {

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
            <Paper>
                <Container>
                    <h1>Войти</h1>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container direction={"column"}>
                            <Grid item xs={12}>
                                <Typography>
                                    Новый пользователь? <Link href={"#"}
                                                              onClick={this.goToRegistration}>Зарегистрируйтесь</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label={"Имя пользователя"} type={"email"} onChange={this.handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label={"Пароль"} type={"password"} onChange={this.handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className={"login-button"} variant="contained" color="primary" type="submit" className="button-block">
                                    Войти
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        );
    }
}