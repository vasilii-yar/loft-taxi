import React from 'react';
import Map from './pages/map/Map';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import {withAuth} from './util/AuthContext';
import './App.css';

const PAGES = {
    map: Map,
    profile: Profile,
    login: Login,
    registration: Registration
}

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
        const Page = PAGES[this.state.currentPage];
        return (
            <div className={"container"}>
                <Page navigateTo={this.navigateTo}/>
            </div>
        );
    }
}

export default withAuth(App);
