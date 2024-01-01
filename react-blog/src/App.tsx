import React from 'react';
import './App.css';
import {Navbar} from "./layouts/navbarAndFooter/Navbar";
import {Footer} from "./layouts/navbarAndFooter/Footer";
import {HomePage} from "./layouts/homePage/HomePage";

export const App = () => {
    return (
        <>
            <Navbar/>
            <HomePage/>
            <Footer/>
        </>
    );
}

export default App;
