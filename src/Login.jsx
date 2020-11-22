import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }
    }

    handleSubmit = () => {
        this.props.navigate("map");
    }

    goToRegistration = () => {
        this.props.navigate("registration");
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
            <form onSubmit={this.handleSubmit}>
                <h1>Войти</h1>
                <p>Новый пользователь? <button onClick={this.goToRegistration}>Зарегистрируйтесь</button></p>
                <label htmlFor="login">Имя пользователя: </label>
                <input id="login" type="text" name="login" size="50" value={this.state.login}
                       onChange={this.handleChange}/>
                <br/>
                <label htmlFor="password">Пароль: </label>
                <input id="password" type="password" name="password" size="50" value={this.state.password}
                       onChange={this.handleChange}/>
                <br/>
                <br/>
                <input type="submit" value="Войти"/>
            </form>
        )
    }
}