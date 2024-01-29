import {DashboardComponent} from "./userDashboardMainTab/DashboardComponent";
import React, {useEffect, useState} from "react";
import UserModel from "../../models/UserModel";
import {DashboardTopLinkComponent} from "./DashboardTopLinkComponent";
import {DashboardInfoCard} from "./DashboardInfoCard";
import {Spinner} from "../utils/Spinner";
import {getToken} from "../../services/AuthService";
import {UserDashboardArticlesComponent} from "./userDashboardArticlesTab/UserDashboardArticlesComponent";
import {DashboardTitle} from "./DashboardTitle";
import {UserDashboardMessagesComponent} from "./userDashboardMessagesTab/UserDashboardMessagesComponent";
import {UserDashboardCommentsComponent} from "./userDashboardCommentsTab/UserDashboardCommentsComponent";


export const UserDashboardPage = (props) => {

    const topMenuTitles = ["Dashboard", "Articles", "Messages", "Comments", "Likes", "Settings"];

    const [user, setUser] = useState<UserModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [titles, setTitles] = useState(topMenuTitles);

    const [clickedTitle, setClickedTitle] = useState("Dashboard");
    const userId = (window.location.pathname).split("/")[2];


    useEffect(() => {
        const token = getToken();
        console.log(token)
        const headers = {'Authorization': `${token}`};
        console.log(headers)

        const fetchUser = async () => {
            const baseUrl: string = `http://localhost:8080/api/v1/private/users/${userId}`;
            const response = await fetch(baseUrl, {headers});

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();

            const loadedUser: UserModel = {
                userId: responseJson.userId,
                firstName: responseJson.firstName,
                lastName: responseJson.lastName,
                username: responseJson.username,
                email: responseJson.email,
                birthDate: responseJson.birthDate,
                avatar: responseJson.avatar,
                isBanned: responseJson.isBanned,
                sentMessages: responseJson.sentMessages,
                receivedMessages: responseJson.receivedMessages,
                articles: responseJson.articles,
                comments: responseJson.comments,
                about: responseJson.about,
                likes: responseJson.likes
            };
            setUser(loadedUser);
            setIsLoading(false);
        };
        fetchUser().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if (isLoading) {
        return (
            <Spinner/>
        )
    }

    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        )
    }

    const handleClick = (value: string) => {
        setClickedTitle(value);
    }


    return (
        <div>
            <div className="row mb-5">
                <div className="col-2">
                    <DashboardInfoCard user={user}/>
                </div>
                <div className="col-md-9 ">
                    <div className="row">
                        {titles.map(title => <DashboardTopLinkComponent handleClick={handleClick} title={title}
                                                                        key={title} onClick={handleClick}/>)}
                    </div>
                    <DashboardTitle title={clickedTitle}/>


                    {clickedTitle === 'Dashboard' ?
                        <DashboardComponent user={user}/>
                        :

                        clickedTitle === 'Articles' ?

                            <UserDashboardArticlesComponent user={user}/>
                            :

                            clickedTitle === 'Messages' ?

                                <UserDashboardMessagesComponent user={user}/>
                                :

                                <UserDashboardCommentsComponent user={user}/>

                    }


                </div>
            </div>
        </div>
    );
}