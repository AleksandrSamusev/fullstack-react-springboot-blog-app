import {DashboardComponent} from "./userDashboardMainTab/DashboardComponent";
import React, {useEffect, useState} from "react";
import UserModel from "../../models/UserModel";
import {DashboardTopLinkComponent} from "./DashboardTopLinkComponent";
import {DashboardInfoCard} from "./DashboardInfoCard";
import {Spinner} from "../utils/Spinner";
import {getToken} from "../../services/AuthService";
import {UserDashboardArticlesComponent} from "./userDashboardArticlesTab/UserDashboardArticlesComponent";
import {DashboardTitle} from "./DashboardTitle";


export const UserDashboardPage = (props) => {

    const topMenuTitles = ["Dashboard", "Articles", "Messages", "Comments", "Likes", "Settings"];

    const [user, setUser] = useState<UserModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [titles, setTitles] = useState(topMenuTitles);

    const [dashboardIsActive, setDashboardIsActive] = useState(false);
    const [articlesIsActive, setArticlesIsActive] = useState(false);
    const [messagesIsActive, setMessagesIsActive] = useState(false);
    const [commentsIsActive, setCommentsIsActive] = useState(false);

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


    return (
        <div>
            <div className="row mb-5">
                <div className="col-3">
                    <DashboardInfoCard user={user}/>
                </div>
                <div className="col-md-8 ">
                    <div className="row" style={{height: '8vh'}}>
                        {titles.map(title => <DashboardTopLinkComponent title={title} key={title}/>)}
                    </div>
                    <DashboardTitle/>

                    {props.clickedTitle === 'Articles' ?
                        <DashboardComponent user={user}/>

                        :
                        <UserDashboardArticlesComponent user={user}/>
                    }




                </div>
            </div>
        </div>
    );
}