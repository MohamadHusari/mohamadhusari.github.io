import React from "react";
import { BrowserRouter , Route, } from "react-router-dom";
import HomePage from './HomePage'



const Router = ()=> {
    return (
        <BrowserRouter>
            <Route exact path="/" component={HomePage}/>
        </BrowserRouter>
    );
};

export default Router;