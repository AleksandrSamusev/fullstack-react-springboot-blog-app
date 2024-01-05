import {useEffect, useState} from "react";
import ArticleModel from "../../models/ArticleModel";
import articleModel from "../../models/ArticleModel";
import {Spinner} from "../utils/Spinner";

export const ArticlePage = () => {

    const [article, setArticle] = useState<ArticleModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

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
                /*author: responseJson.author,*/
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
                            <h2 className="mb-5" style={{fontFamily: 'Tahoma', fontSize: '60px'}}>{article?.title}</h2>
                            {/*<h5 className="text-primary">{article?.author}</h5>*/}
                            <p style={{fontFamily: "Arial", fontSize: '14px', fontWeight: '700'}}>Published By:
                                Anonimous</p>
                            <p style={{fontFamily: "Arial", fontSize: '14px', fontWeight: '700'}}>Publication
                                date: {(article?.published.split(":")[0]) ? (article?.published.split(":")[0])
                                    .substring(0, article?.published.split(":")[0].length - 3) : ''}</p>
                            <div className="pt-5">
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
            </div>
            <div className="container d-lg-none mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    {article?.image ?
                        <img src={article?.image} alt="article"/>
                        :
                        <img src={require('../../Images/ArticlesImages/default.png')} alt="article"/>
                    }
                </div>
                <div className="mt-4">
                    <div className="ml-2">
                        <h2 style={{fontFamily: 'Tahoma', fontSize: '30px'}}>{article?.title}</h2>
                        {/*<h5 className="text-primary">{article?.author}</h5>*/}
                        <p className="lead">{article?.content}</p>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
}