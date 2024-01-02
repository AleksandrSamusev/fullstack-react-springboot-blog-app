import {useEffect, useState} from "react";

import {Spinner} from "../utils/Spinner";
import {SearchArticle} from "./components/SearchArticle";
import ArticleModel from "../../models/ArticleModel";

export const SearchArticlesPage = () => {

    const [articles, setArticles] =
        useState<ArticleModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);


    useEffect(() => {
        const fetchArticles = async () => {
            const baseUrl: string = "http://localhost:8080/api/v1/public/articles";

            const url: string = `${baseUrl}?from=0&size=20`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseData = await response.json();

            const loadedArticles: ArticleModel[] = [];

            for (const key in responseData) {
                loadedArticles.push({
                    articleId: responseData[key].articleId,
                    title: responseData[key].title,
                    content: responseData[key].content,
                    image: responseData[key].image,
                    author: responseData[key].author,
                    published: responseData[key].published,
                    likes: responseData[key].likes,
                    views: responseData[key].views
                });
            }
            setArticles(loadedArticles);
            setIsLoading(false);
        };
        fetchArticles().catch((error: any) => {
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

    return(
        <div>
            <div className="container">
                <div>
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="d-flex">
                                <input className="form-control me-2" type="search"
                                placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            All
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            cat_1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            cat_2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            cat_3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            cat_4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h5>Number of results: (20)</h5>
                    </div>
                    <p>
                        1 to 5 of 20 items:
                    </p>
                    {articles.map(article => (
                        <SearchArticle article={article} key={article.articleId}/>
                    ))}
                </div>
            </div>
        </div>
    );
}