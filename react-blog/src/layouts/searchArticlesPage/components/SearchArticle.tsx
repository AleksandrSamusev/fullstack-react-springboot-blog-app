import React from "react";
import ArticleModel from "../../../models/ArticleModel";

export const SearchArticle: React.FC<{ article: ArticleModel }> = (props) => {
    return (
        <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
            <div className="row g-0 ">

                <div className="col-md-6">
                    <div className="d-none d-lg-block">
                        {props.article.image ?
                            <img src={props.article.image}
                                 width='500' height='250'
                                 alt="article"
                                 className="shadow-lg"/>
                            :
                            <img src={require('../../../Images/ArticlesImages/default.png')}
                                 width='500' height='250'
                                 alt="article"/>
                        }
                    </div>
                </div>
                <div className="col-md-6 mt-2">
                    <div className="card-body">

                        <h4 className="mb-3 fw-bold" style={{fontFamily: 'Arial', fontSize: '26px'}}>
                            {props.article.title}
                        </h4>
                        <h5 className="card-title mb-3 fw-bold">
                            {props.article.author.username}
                        </h5>
                        <p className="card-text mb-4"
                           style={{fontFamily: 'Arial', fontSize: '16px', textAlign: 'justify'}}>
                            {props.article.content}
                        </p>
                        <a className="btn btn-md main-color text-white shadow-lg" href="#">
                            View details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}