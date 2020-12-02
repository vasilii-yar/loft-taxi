import React, {useEffect} from 'react';

export const Context = React.createContext();

/*export default class AuthContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    logIn = (email, password) => {
        this.setState({isLoggedIn: true});
    }

    logOut = () => {
        this.setState({isLoggedIn: false});
    }

    isLoggedIn = () => {
        return this.state.isLoggedIn;
    }

    render() {
        return (
            <Context.Provider value={{
                logIn: this.logIn,
                logOut: this.logOut,
                isLoggedIn: this.isLoggedIn
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}*/

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const logIn = (email, password) => {
        setIsLoggedIn(true);
    }

    const logOut = () => {
        setIsLoggedIn(false);
    }

    return (
        <Context.Provider value={{logIn, logOut, isLoggedIn}}>
            {children}
        </Context.Provider>
    );
}

export const withAuth = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <Context.Consumer>
                    {
                        (value) => {
                            return <WrappedComponent {...value} {...this.props}/>
                        }
                    }
                </Context.Consumer>
            );
        }
    }
}
