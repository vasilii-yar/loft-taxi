import React from 'react';
import Map from './pages/map/Map';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import './App.css';
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./util/route/PrivateRoute";

class App extends React.Component {
    state = {
        currentPage: "login"
    };

    navigateTo = (page) => {
        if (this.props.isLoggedIn) {
            this.setState({currentPage: page});
        } else if (page === "registration") {
            this.setState({currentPage: "registration"});
        } else {
            this.setState({currentPage: "login"})
        }
    };

    render() {
        return (
            <div className={"container"}>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <PrivateRoute path="/map" component={Map}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/registration" component={Registration}/>
                </Switch>
            </div>
        );
    }
}

//TODO Вынести селектор в отдельный файл
export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
