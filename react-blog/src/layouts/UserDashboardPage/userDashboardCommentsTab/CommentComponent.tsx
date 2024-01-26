import React from "react";

export const CommentComponent = (props) => {
    return (
        <div className="row shadow-lg mb-5 px-3 ">
            <div className="row container-fluid align-items-center mb-3">
                <div className="col">

                    <img className="img-fluid mt-3 shadow"  src={

                        props.comment.articleImage === null || props.comment.articleImage === undefined ?
                            require("../../../Images/ArticlesImages/default.png")
                            :
                            `${props.comment.articleImage}`

                    } />
                </div>
                <div className="col display-5 ">
                    <p>{props.comment.articleTitle}</p>
                </div>
                <div className="col">
                    <p>{props.comment.comment}</p>
                </div>

            </div>
            <div className="row d-flex align-items-center mb-3">
                <div className="col">
                    <img src={
                        props.user.avatar === null || props.user.avatar === undefined ?
                            require("../../../Images/PublicImages/profile-placeholder-image.jpg")
                            :
                            `${props.user.avatar}`
                    } style={{height: '50px'}}/>
                </div>
                <div className="col">
                    <p>{props.user.username}</p>
                </div>
                <div className="col">
                    <p>{props.comment.created}</p>
                </div>


            </div>
        </div>
    );
}