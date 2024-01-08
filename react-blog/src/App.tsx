import React from 'react';
import './App.css';
import {Navbar} from "./layouts/navbarAndFooter/Navbar";
import {Footer} from "./layouts/navbarAndFooter/Footer";
import {HomePage} from "./layouts/homePage/HomePage";
import {SearchArticlesPage} from "./layouts/searchArticlesPage/SearchArticlesPage";
import {ArticlePage} from "./layouts/ArticlePage/ArticlePage";
import RegisterComponent from "./layouts/utils/RegisterComponent";
import LoginComponent from "./layouts/utils/LoginComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserDashboardPage} from "./layouts/UserDashboardPage/UserDashboardPage";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">
                <Navbar/>
                <div className="flex-grow-1">

                    <Routes>
                        <Route path="/" element={<HomePage/>}></Route>
                        <Route path="/home" element={<HomePage/>}></Route>
                        <Route path="/search" element={<SearchArticlesPage/>}></Route>
                        <Route path="/full-article/:articleId" element={<ArticlePage/>}></Route>
                        <Route path="/register" element={<RegisterComponent/>}></Route>
                        <Route path="/login" element={<LoginComponent/>}></Route>
                        <Route path="/dashboard" element={<UserDashboardPage/>}></Route>
                    </Routes>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
