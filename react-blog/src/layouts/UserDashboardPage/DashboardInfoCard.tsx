import {DashboardInfoCardParams} from "./DashboardInfoCardParams";
import React from "react";

export const DashboardInfoCard = (props) => {
    return (

        <div className="card" style={{background: 'transparent', border: 'none'}}>
            {props.user.avatar === '' || props.user.avatar === undefined  ||  props.user.avatar === null ?
                <img src={require("../../Images/PublicImages/profile-placeholder-image.jpg")}
                     className="card-img-top" alt="user-photo"
                     style={{borderRadius: '350px', scale: '75%'}}/>
                :
                <img src={props.user.avatar} alt="user-avatar"
                     className="card-img-top shadow-lg"
                     style={{borderRadius: '350px', scale: '65%', border: '1px solid #D8D8D8'}}/>

            }

            <div className="card-body pt-0">
                <h6 className="card-title">{props.user.about}</h6>

            </div>
            <DashboardInfoCardParams user={props.user}/>
        </div>
    );
}

/*
<img className="shadow-lg" src={article?.image} alt="article"/>
:
<img src={require('../../Images/ArticlesImages/default.png')} alt="article"/>*/
