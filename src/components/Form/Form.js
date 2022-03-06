import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeHeader from "../Home/Header/HomeHeader";
import HomeContact from "../Home/Contact/HomeContact";
import Pierwszy from "./Pierwszy";
import Drugi from "./Drugi";
import Trzeci from "./Trzeci";

const Form = () => {
    return (
        <>
            <Router>
                <HomeHeader />
                <Switch>
                    <Route exact path="/oddaj-rzeczy" component={Pierwszy} />
                    <Route exact path="/oddaj-rzeczy/drugi" component={Drugi} />
                    <Route exact path="/oddaj-rzeczy/trzeci" component={Trzeci} />
                </Switch>
                <HomeContact />
            </Router>
        </>
    )
}

export default Form;
