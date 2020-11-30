import React from 'react';
import Map from './pages/map/Map';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import AppContext from "./util/AppContext";
import './App.css';

const PAGES = {
    map: Map,
    profile: Profile,
    login: Login,
    registration: Registration
}

const userStatus = {isLoggedIn: false}

export default class App extends React.Component {
    state = {
        currentPage: "login"
    };

    navigateTo = (page) => {
        if (userStatus.isLoggedIn || page === "registration") {
            this.setState({currentPage: page});
        } else {
          this.setState({currentPage: "login"})
        }
    };

    logIn = (email, password) => {
        userStatus.isLoggedIn = true;
        this.navigateTo("map");
    }

    logOut = () => {
        userStatus.isLoggedIn = false;
        this.navigateTo("login");
    }

    render() {
        const Page = PAGES[this.state.currentPage];
        return (
            <div className={"container"}>
                <AppContext.Provider value={{
                    navigateTo: this.navigateTo,
                    logIn: this.logIn,
                    logOut: this.logOut
                }
                }>
                    <Page navigate={this.navigateTo}/>
                </AppContext.Provider>
            </div>
        );
    }
}
