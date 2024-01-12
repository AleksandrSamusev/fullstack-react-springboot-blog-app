import {DashboardComponent} from "../utils/DashboardComponent";
import React, {useEffect, useState} from "react";
import UserModel from "../../models/UserModel";
import {DashboardTopLinkComponent} from "../utils/DashboardTopLinkComponent";
import {DashboardInfoCard} from "../utils/DashboardInfoCard";
import {Spinner} from "../utils/Spinner";
import {getToken} from "../../services/AuthService";


export const UserDashboardPage = () => {

    const topMenuTitles = ["Dashboard", "Articles", "Messages", "Comments", "Likes", "Settings"];

    const [user, setUser] = useState<UserModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [titles, setTitles] = useState(topMenuTitles);

    const userId = (window.location.pathname).split("/")[2];

    useEffect(() => {
        const token = getToken();
        console.log(token)
        const headers = { 'Authorization': `${token}`};
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
                    <DashboardComponent user={user}/>
                </div>
            </div>
        </div>
    );
}