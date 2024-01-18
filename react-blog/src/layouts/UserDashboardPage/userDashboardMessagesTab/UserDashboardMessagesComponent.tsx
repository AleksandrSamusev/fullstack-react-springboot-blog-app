import React from "react";
import {MessagesComponent} from "./MessagesComponent";
import {ArticlesCheckboxBlock} from "../userDashboardArticlesTab/ArticlesCheckboxBlock";

export const UserDashboardMessagesComponent = (props) => {

    const checkBoxTitles = ['Sort by'];
    const checkBoxOptions = ['received', 'sent', 'date', 'username'];

    return (
        <div className="row">
            <div className="mt-4 " style={{height: '58vh', width: '63vw', overflowY: 'scroll', overflowX: 'hidden'}}>
                {
                    props.user.receivedMessages.map(message => (
                        <MessagesComponent message={message} key={message.messageId}/>
                    ))
                }
            </div>
            <div style={{width: '150px'}}>
                <ArticlesCheckboxBlock title={checkBoxTitles[0]}
                                       key={checkBoxTitles[0]}
                                       options={checkBoxOptions}/>
            </div>
        </div>
    );
}