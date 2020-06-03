import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import App from './Container/home/App';
import Customer from './Container/Customer';
import AddCustomer from './Container/Customer/Add';
import PageNotFound from './Container/PageNotFound';
import Navbar from './Container/Navbar/Navbar';

const routes = (props) => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={App} />
                <Route
                    exact
                    path="/customer"
                    component={Customer} />
                <Route
                    exact
                    path="/customer/new"
                    component={AddCustomer} />
                <Route
                    exact
                    path="/customer/edit/:id"
                    component={AddCustomer} />
                <Route
                    path=""
                    component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default routes;