import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";

class PrivateRoute extends React.Component {
    render() {
        const {Component, ...rest} = this.props;
        return (
            <Route
                {...rest}
                render={(props) =>
                    this.props.isLoggedIn ?
                        <Component {...props}/> : <Redirect to={"/"}/>
                }
            />
        );
    }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn})
)(PrivateRoute);