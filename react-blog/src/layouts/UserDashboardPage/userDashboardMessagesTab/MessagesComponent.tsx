import React from "react";

export const MessagesComponent = (props) => {
    return (
        <div className="row mb-5 px-3">
            <div className="col-1">
                <img src={
                    props.message.sender.avatar === null || props.message.sender.avatar === undefined ?
                        require("../../../Images/PublicImages/profile-placeholder-image.jpg")
                        :
                        `${props.message.sender.avatar}`
                } style={{height: '50px'}}/>
            </div>
            <div className="col-3">
                <div className="mt-1 px-3">
                    <h5 style={{
                        fontFamily: 'Roboto',
                        fontSize: '16px',
                        fontWeight: '700'}}>{props.message.sender.username}</h5>
                    <p className="p-0 m-0" style={{
                        fontFamily: 'Roboto',
                        fontSize: '10px',
                        fontWeight: '400'}}>{props.message.created.substring(0, 10)
                        + " " + props.message.created.substring(12, 19)}</p>
                </div>
            </div>
            <div className="col-8">
                <p style={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400'}}>{props.message.message}</p>
            </div>
        </div>
    );
}