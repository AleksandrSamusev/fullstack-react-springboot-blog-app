import {CarouselCard} from "./CarouselCard";
import {useState, useEffect} from "react";
import ArticleModel from "../../../models/ArticleModel";
import articleModel from "../../../models/ArticleModel";


export const Carousel = () => {

    const [articles, setArticles] =
        useState<ArticleModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(()=>{
        const fetchArticles = async () => {
            const baseUrl: string = "http://localhost:8080/api/v1/public/articles";

            const url:string = `${baseUrl}?from=0&size=3`;

            const response = await fetch(url);

            if(!response.ok) {
                throw  new Error('Something went wrong!');
            }
            const responseData = await response.json();

            const loadedArticles: articleModel[] = [];

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
        fetchArticles().catch((error:any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if(isLoading) {
        return(
            <div className="container m-5">
                <p>Loading...</p>
            </div>
        )
    }

    if(httpError) {
        return(
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide border shadow-lg"
             data-bs-ride="carousel" style={{marginTop: '50px'}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    {articles.slice(0,1).map(article => (
                        <CarouselCard article={article} key={article.articleId}/>
                    ))}
                </div>
                <div className="carousel-item">
                    {articles.slice(1,2).map(article => (
                        <CarouselCard article={article} key={article.articleId}/>
                    ))}
                </div>
                <div className="carousel-item">
                    {articles.slice(2,3).map(article => (
                        <CarouselCard article={article} key={article.articleId}/>
                    ))}
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}