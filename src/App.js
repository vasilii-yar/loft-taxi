import React from 'react';
import {Map} from './pages/Map';
import {Profile} from './pages/Profile';
import Login from './pages/Login';
import Registration from './pages/Registration'
import './css/App.css';

const PAGES = {
    map: Map,
    profile: Profile,
    login: Login,
    registration: Registration
}

export default class App extends React.Component {
    state = {currentPage: "login"};

    navigateTo = (page) => {
        this.setState({currentPage: page});
    };

    render() {
        const Page = PAGES[this.state.currentPage];
        return (
            <div className={"container"}>
                <Page navigate={this.navigateTo}/>
            </div>
        );
    }
}

/*
* <Logo white={true}/>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <button onClick={() => {
                                    this.navigateTo("map")
                                }}>
                                    Карта
                                </button>
                            </li>
                            <li>
                                <button onClick={() => {
                                    this.navigateTo("profile")
                                }}>
                                    Профиль
                                </button>
                            </li>
                            <li>
                                <button onClick={() => {
                                    this.navigateTo("login")
                                }}>
                                    Логин
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <section>
                        {
                            <Page navigate={this.navigateTo}/>
                        }
                    </section>
                </main>
*
* */
