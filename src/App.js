import React from 'react';
import {Map} from './Map';
import {Profile} from './Profile';
import Login from './Login';
import Registration from './Registration'
import './App.css';

const PAGES = {
    map: Map,
    profile: Profile,
    login: Login,
    registration: Registration
}

export default class App extends React.Component {
    state = {currentPage: "map"};

    navigateTo = (page) => {
        this.setState({currentPage: page});
    };

    render() {
        const Page = PAGES[this.state.currentPage];
        return (
            <>
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
            </>
        );
    }
}
