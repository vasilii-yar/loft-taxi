import React from 'react';
import {Map} from './Map';
import {Profile} from './Profile';
import Login from './Login';
import Registration from './Registration'
import './App.css';

export default class App extends React.Component {
    state = {currentPage: "map"}

    navigateTo = (page) => {
        this.setState({currentPage: page});
    };

    PAGES = {
        map: <Map/>,
        profile: <Profile/>,
        login: <Login navigate={this.navigateTo}/>,
        registration: <Registration navigate={this.navigateTo}/>
    }

    render() {
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
                        {this.PAGES[this.state.currentPage]}
                    </section>
                </main>
            </>
        );
    }
}
