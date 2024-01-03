import React from 'react';
import './App.css';
import {Navbar} from "./layouts/navbarAndFooter/Navbar";
import {Footer} from "./layouts/navbarAndFooter/Footer";
import {HomePage} from "./layouts/homePage/HomePage";
import {SearchArticlesPage} from "./layouts/searchArticlesPage/SearchArticlesPage";
import {Redirect, Route, Switch} from "react-router";

export const App = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar/>
            <div className="flex-grow-1">
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/home'/>
                    </Route>
                    <Route path='/home' exact>
                        <HomePage/>
                    </Route>
                    <Route path='/search'>
                        <SearchArticlesPage/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
