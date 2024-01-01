import {TopArticles} from "./components/TopArticles";
import {Carousel} from "./components/Carousel";
import {HeroComponent} from "./components/HeroComponent";
import {MessageService} from "./components/MessageService";
import React from "react";

export const HomePage = () => {
    return (
        <>
            <TopArticles/>
            <Carousel/>
            <HeroComponent/>
            <MessageService/>
        </>
    );
}