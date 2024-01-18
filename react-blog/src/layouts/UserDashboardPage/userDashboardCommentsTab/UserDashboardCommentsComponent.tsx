import {ArticlesCheckboxBlock} from "../userDashboardArticlesTab/ArticlesCheckboxBlock";
import React from "react";
import {CommentComponent} from "./CommentComponent";

export const UserDashboardCommentsComponent = (props) => {

    const checkBoxTitles = ['Sort by'];
    const checkBoxOptions = ['article', 'date'];

    const getAtricle = (articleId) => {
        const art =  props.user.articles.filter(article => article.articleId === articleId)
        console.log(art)
        return art;
    }

    return(
        <div className="row">
            <div className="mt-4 " style={{height: '58vh', width: '63vw', overflowY: 'scroll', overflowX: 'hidden'}}>
                {
                    props.user.comments.map(comment => (
                        <CommentComponent comment={comment} article={getAtricle(comment.articleId)} user={props.user} key={comment.commentId}/>
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