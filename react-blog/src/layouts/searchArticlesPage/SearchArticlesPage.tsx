import React, {useEffect, useState} from "react";

import {Spinner} from "../utils/Spinner";
import {SearchArticle} from "./components/SearchArticle";
import ArticleModel from "../../models/ArticleModel";
import {Pagination} from "../utils/Pagination";

export const SearchArticlesPage = (props) => {

    const [articles, setArticles] =
        useState<ArticleModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(5);
    const [totalAmountOfArticles, setTotalAmountOfArticles] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('');
    const [searchUrl, setSearchUrl] = useState('');

    useEffect(() => {


        const fetchArticles = async () => {
            const baseUrl: string = "http://localhost:8080/api/v1/public/rest/articles";

            let url: string;
            if (searchUrl === '') {
                url = `${baseUrl}?sort=published,desc&page=${currentPage - 1}&size=${articlesPerPage}`;
            } else {
                let searchWithPage = searchUrl.replace('<pageNumber>', `${currentPage - 1}`);
                url = baseUrl + searchWithPage;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();
            const responseData = responseJson._embedded.articles;

            setTotalAmountOfArticles(responseJson.page.totalElements);
            setTotalPages(responseJson.page.totalPages);

            const loadedArticles: ArticleModel[] = [];

            for (const key in responseData) {
                loadedArticles.push({
                    articleId: responseData[key].articleId,
                    title: responseData[key].title,
                    content: responseData[key].content,
                    image: responseData[key].image,
                    /*author: responseData[key].author,*/
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
        window.scrollTo(0, 0);
    }, [currentPage, searchUrl]);


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

    const searchHandleChange = () => {
        setCurrentPage(1);
        if (search === '') {
            setSearchUrl('');
        } else {
            setSearchUrl(`/search/findByText?text=${search}&page=<pageNumber>&size=${articlesPerPage}`);
        }
    }

    const indexOfLastArticle: number = currentPage * articlesPerPage;
    const indexOfFirstArticle: number = indexOfLastArticle - articlesPerPage;
    let lastItem = articlesPerPage * currentPage <= totalAmountOfArticles ?
        articlesPerPage * currentPage : totalAmountOfArticles;

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const changeSearchUrl = (tag: string) => {
        setCurrentPage(1);
        setSearchUrl(`/search/findAllByTag?tag=${tag}&page=<pageNumber>&size=${articlesPerPage}`);
    }

    return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 d-flex">
                        <input className="form-control me-2" type="search"
                               placeholder="Search" aria-labelledby="Search"
                               onChange={e => setSearch(e.target.value)}/>
                        <button className="btn btn-outline-success" onClick={() => searchHandleChange()}>Search</button>
                    </div>
                </div>
                {totalAmountOfArticles > 0 ?
                    <>
                        <div className="row mt-3">
                            <div className="col-lg-6 d-flex">
                                <h5>Number of results: ({totalAmountOfArticles})</h5>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-6 d-flex">
                                <p>{indexOfFirstArticle + 1} to {lastItem} of {totalAmountOfArticles} items:</p>
                            </div>
                        </div>
                        {articles.map(article => (
                            <SearchArticle article={article}
                                           key={article.articleId}
                                           changeSearchUrl={changeSearchUrl}/>
                        ))}
                    </>
                    :
                    <div className="m-5">
                        <h3>
                            Cant find what you are looking for?
                        </h3>
                        <a type="button" href="#" className="btn main-color btn-md px-4 me-md-2
                            fw-bold text-white">Library services</a>
                    </div>
                }
                {totalPages > 1 &&
                    <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}/>
                }

            </div>

    );
}