import React from "react";
import { BrowserRouter , Route, Switch, Redirect } from "react-router-dom";
import HomePage from './HomePage'
// import ContactMe from './ContactMe'


const Router = ()=> {
    return (
        <BrowserRouter>
            {/*<Route exact path="/" component={HomePage}/>*/}
            <Switch>
                <Route path="/home" component={HomePage} />
                <Redirect from="/" to="/home" />
            </Switch>
            {/*<Route path="/contact-me" render={props => (<HomePage {...props} contactme={ContactMe}/>)} />*/}

        </BrowserRouter>
    );
};

export default Router;