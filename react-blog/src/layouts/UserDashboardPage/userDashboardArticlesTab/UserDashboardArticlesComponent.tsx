import React from "react";
import {ArticlesCheckboxBlock} from "./ArticlesCheckboxBlock";
import {ArticleCard} from "./ArticleCard";

export const UserDashboardArticlesComponent = (props) => {

    const checkBoxTitles = ['Show', 'Sort by'];
    const checkBoxOptionsTop = ['created', 'published', 'on review', 'rejected'];
    const checkBoxOptionsBottom = ['publication date', 'creation date', 'likes', 'views'];

    return (
        <div className="row">

            <div className="mt-4 " style={{height: '58vh', width: '51vw', overflowY: 'scroll', overflowX: 'hidden'}}>
                <ul className="cards">
                    {
                        props.user.articles.map(article => (
                            <ArticleCard article={article}
                                         key={article.articleId}/>
                        ))
                    }
                </ul>
            </div>
            <div style={{width: '200px', marginLeft: '70px'}}>
               <ArticlesCheckboxBlock title={checkBoxTitles[0]} key={checkBoxTitles[0]} options={checkBoxOptionsTop}/>
               <ArticlesCheckboxBlock title={checkBoxTitles[1]} key={checkBoxTitles[1]} options={checkBoxOptionsBottom}/>
            </div>
        </div>
    );
}