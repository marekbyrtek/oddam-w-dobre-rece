import React from "react";
import { Route, Redirect } from "react-router";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="./logowanie" />
            }} />
    )
}

export default PrivateRoute;
