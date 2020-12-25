import React from 'react';
import Map from './components/map/Map';
import Profile from './components/profile/Profile';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import './App.css';
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./util/route/PrivateRoute";
import ErrorMessageSnackbar from "./components/errormessage/ErrorMessageSnackbar";

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
                <ErrorMessageSnackbar/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return(
        {isLoggedIn: state.auth.isLoggedIn}
    )
}
export default connect(mapStateToProps)(App);
