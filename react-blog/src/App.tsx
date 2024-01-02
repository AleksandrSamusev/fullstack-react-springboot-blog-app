import React from 'react';
import './App.css';
import {Navbar} from "./layouts/navbarAndFooter/Navbar";
import {Footer} from "./layouts/navbarAndFooter/Footer";
import {HomePage} from "./layouts/homePage/HomePage";
import {SearchArticlesPage} from "./layouts/searchArticlesPage/SearchArticlesPage";

export const App = () => {
    return (
        <>
            <Navbar/>
            {/*<HomePage/>*/}
            <SearchArticlesPage/>
            <Footer/>
        </>
    );
}

export default App;
