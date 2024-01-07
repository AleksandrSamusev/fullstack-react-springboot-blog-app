import React, {useEffect, useState} from "react";
import ArticleModel from "../../models/ArticleModel";
import articleModel from "../../models/ArticleModel";
import {Spinner} from "../utils/Spinner";
import CommentModel from "../../models/CommentModel";
import {LatestComments} from "./LatestComments";

export const ArticlePage = () => {

    const [article, setArticle] = useState<ArticleModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    //Comment state
    const [comments, setComments] = useState<CommentModel[]>([]);
    const [isLoadingComments, setIsLoadingComments] = useState(true);

    const articleId = (window.location.pathname).split('/')[2];


    useEffect(() => {
        const fetchArticle = async () => {
            const baseUrl: string = `http://localhost:8080/api/v1/public/articles/${articleId}`;
            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();

            const loadedArticle: articleModel = {
                articleId: responseJson.articleId,
                title: responseJson.title,
                content: responseJson.content,
                image: responseJson.image,
                author: responseJson.author,
                published: responseJson.published,
                likes: responseJson.likes,
                views: responseJson.views
            };
            setArticle(loadedArticle);
            setIsLoading(false);
        };
        fetchArticle().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);


    useEffect(() => {
        const fetchArticleComments = async () => {
            const commentUrl: string = `http://localhost:8080/api/v1/public/comments/articles/${articleId}`;
            const responseComments = await fetch(commentUrl);
            if (!responseComments.ok) {
                throw new Error('Something went wrong!');
            }
            const responseData = await responseComments.json();
            const loadedComments: CommentModel[] = [];

            for (const key in responseData) {

                loadedComments.push({
                    commentId: responseData[key].commentId,
                    comment: responseData[key].comment,
                    created: responseData[key].created,
                    articleId: responseData[key].articleId,
                    commentAuthor: responseData[key].commentAuthor
                });
            }
            setComments(loadedComments);
            setIsLoadingComments(false);
        };

        fetchArticleComments().catch((error: any) => {
            setIsLoadingComments(false);
            setHttpError(error.message);
        })
    }, []);


    if (isLoading || isLoadingComments) {
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
            <div className="container d-none d-lg-block">
                <div className="row mt-5">
                    <div className="col-sm-2 col-md-6">
                        {article?.image ?
                            <img className="shadow-lg" src={article?.image} alt="article"/>
                            :
                            <img src={require('../../Images/ArticlesImages/default.png')} alt="article"/>
                        }
                    </div>
                    <div className="col-4 col-md-6 container">
                        <div className="ml-2">
                            <h2 className="mb-3" style={{fontFamily: 'Tahoma', fontSize: '60px'}}>{article?.title}</h2>
                            <p style={{fontFamily: "Arial", fontSize: '14px', fontWeight: '700'}}>published
                                by: {article?.author.username}</p>
                            <p style={{fontFamily: "Arial", fontSize: '14px', fontWeight: '700'}}>published
                                on: {(article?.published.split(":")[0]) ? (article?.published.split(":")[0])
                                    .substring(0, article?.published.split(":")[0].length - 3) : ''}</p>
                            <div className="pt-3">
                                <p
                                    style={{
                                        fontFamily: "Arial",
                                        fontSize: '16px',
                                        opacity: '0.8',
                                        color: 'white',
                                        backgroundColor: '#E36414',
                                        borderRadius: '5px'
                                    }}
                                    className="lead d-inline me-3 p-2 border shadow-lg">Views - {article?.views}
                                </p>
                                <p
                                    style={{
                                        fontFamily: "Arial",
                                        fontSize: '16px',
                                        opacity: '0.8',
                                        color: 'white',
                                        backgroundColor: '#E36414',
                                        borderRadius: '5px'
                                    }}
                                    className="lead d-inline me-3 p-2 border shadow-lg ">Likes - {article?.likes}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col container">
                        <div className="ml-2">
                            <p
                                style={{
                                    fontFamily: "Arial",
                                    fontSize: '18px',
                                    opacity: '0.8',
                                    textAlign: 'justify'
                                }}
                                className="lead">{article?.content}</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <LatestComments comments={comments} articleId={article?.articleId} mobile={false}/>
            </div>
            <div className="container d-lg-none mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    {article?.image ?
                        <img src={article?.image} style={{width: '500px'}} alt="article"/>
                        :
                        <img src={require('../../Images/ArticlesImages/default.png')} alt="article"/>
                    }
                </div>
                <div className="mt-4">
                    <div className="ml-2">
                        <h2 style={{fontFamily: 'Tahoma', fontSize: '45px'}}>{article?.title}</h2>
                        <p style={{fontFamily: "Arial", fontSize: '14px', fontWeight: '700'}}>published
                            by: {article?.author.username}
                        </p>
                        <p style={{fontFamily: "Arial", fontSize: '14px', fontWeight: '700'}}>published
                            on: {(article?.published.split(":")[0]) ? (article?.published.split(":")[0])
                                .substring(0, article?.published.split(":")[0].length - 3) : ''}
                        </p>
                        <div className="pt-2 mb-4">
                            <p
                                style={{
                                    fontFamily: "Arial",
                                    fontSize: '12px',
                                    opacity: '0.8',
                                    color: 'black',
                                    backgroundColor: '#E36414',
                                    borderRadius: '5px'
                                }}
                                className="lead d-inline me-3 p-2 border shadow-lg">Views - {article?.views}
                            </p>
                            <p
                                style={{
                                    fontFamily: "Arial",
                                    fontSize: '12px',
                                    opacity: '0.8',
                                    color: 'black',
                                    backgroundColor: '#E36414',
                                    borderRadius: '5px'
                                }}
                                className="lead d-inline me-3 p-2 border shadow-lg ">Likes - {article?.likes}
                            </p>
                        </div>
                        <p
                            style={{
                                fontFamily: "Arial",
                                fontSize: '14px',
                                textAlign: 'justify'
                            }}
                            className="lead">{article?.content} </p>
                    </div>
                </div>
                <hr/>
                <LatestComments comments={comments} articleId={article?.articleId} mobile={true}/>
            </div>
        </div>
    );
}