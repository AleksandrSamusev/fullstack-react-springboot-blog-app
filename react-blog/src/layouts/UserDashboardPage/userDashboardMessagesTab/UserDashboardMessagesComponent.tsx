import React from "react";
import {MessagesComponent} from "./MessagesComponent";

export const UserDashboardMessagesComponent = (props) => {
    return (
        <div className="row">
            <div className="mt-4 " style={{height: '58vh', width: '63vw', overflowY: 'scroll', overflowX: 'hidden'}}>
                {
                    props.user.receivedMessages.map(message => (
                        <MessagesComponent message={message} key={message.messageId}/>
                    ))
                }
            </div>
        </div>
    );
}