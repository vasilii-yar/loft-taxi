import React from 'react';

export default class Registration extends React.Component {
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
        this.props.navigate("map");
    }

    goToLogin = () => {
        this.props.navigate("login")
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
                <h1>Регистрация</h1>
                <p>Уже зарегистрированы? <button onClick={this.goToLogin}>Войти</button></p>
                <label htmlFor="email">Адрес электронной почты: </label>
                <input id="email" type="email" name="email" size="25" value={this.state.email}
                       onChange={this.handleChange}/>
                <br/>
                <label htmlFor="name">Имя: </label>
                <input id="name" type="text" name="name" size="25" value={this.state.name}
                       onChange={this.handleChange}/>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <label htmlFor="surname">Фамилия: </label>
                <input id="surname" type="text" name="surname" size="25" value={this.state.surname}
                       onChange={this.handleChange}/>
                <br/>
                <label htmlFor="password">Пароль: </label>
                <input id="password" type="password" name="password" size="21" value={this.state.password}
                       onChange={this.handleChange}/>
                <br/>
                <br/>
                <input type="submit" value="Войти"/>
            </form>
        )
    }
}