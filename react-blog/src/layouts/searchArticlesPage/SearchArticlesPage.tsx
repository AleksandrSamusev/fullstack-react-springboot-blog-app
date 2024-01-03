import {useEffect, useState} from "react";

import {Spinner} from "../utils/Spinner";
import {SearchArticle} from "./components/SearchArticle";
import ArticleModel from "../../models/ArticleModel";
import {Pagination} from "../utils/Pagination";

export const SearchArticlesPage = () => {

    const [articles, setArticles] =
        useState<ArticleModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(5);
    const [totalAmountOfArticles, setTotalAmountOfArticles] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            const baseUrl: string = "http://localhost:8080/api/v1/public/articles";
            const countUrl: string = "http://localhost:8080/api/v1/public/articles/count-all";


            const url: string = `${baseUrl}?from=${currentPage - 1}&size=${articlesPerPage}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseData = await response.json();
            const responseAll = await fetch(countUrl);
            if (!responseAll.ok) {
                throw new Error('Something went wrong!');
            }
            const responseAllData = await responseAll.text();
            let count: number = Number(responseAllData);

            setTotalAmountOfArticles(count);
            setTotalPages(Math.round(count / articlesPerPage));
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
        window.scrollTo(0,0);
    }, [currentPage]);


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

    const indexOfLastArticle: number = currentPage * articlesPerPage;
    const indexOfFirstArticle: number = indexOfLastArticle - articlesPerPage;
    let lastItem = articlesPerPage * currentPage <= totalAmountOfArticles ?
        articlesPerPage * currentPage : totalAmountOfArticles;

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    return (
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
                        <h5>Number of results: ({totalAmountOfArticles})</h5>
                    </div>
                    <p>
                        {indexOfFirstArticle + 1} to {lastItem} of {totalAmountOfArticles} items:
                    </p>
                    {articles.map(article => (
                        <SearchArticle article={article} key={article.articleId}/>
                    ))}
                    {totalPages > 1 &&
                        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}/>
                    }
                </div>
            </div>
        </div>
    );
}