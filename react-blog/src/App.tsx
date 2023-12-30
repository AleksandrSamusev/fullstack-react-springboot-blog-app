import React from 'react';
import './App.css';
import {Navbar} from "./layouts/navbarAndFooter/Navbar";
import {TopArticles} from "./layouts/homePage/TopArticles";
import {Carousel} from "./layouts/homePage/Carousel";
import {HeroComponent} from "./layouts/homePage/HeroComponent";
import {MessageService} from "./layouts/homePage/MessageService";

function App() {
    return (
        <>
            <Navbar/>
            <TopArticles/>
            <Carousel/>
            <HeroComponent/>
            <MessageService/>
        </>
    );
}

export default App;
