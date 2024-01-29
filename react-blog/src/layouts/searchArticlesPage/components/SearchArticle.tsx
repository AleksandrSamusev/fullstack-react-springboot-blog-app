import React, {useEffect, useState} from "react";
import ArticleModel from "../../../models/ArticleModel";
import {TagComponent} from "../../homePage/components/TagComponent";
import tagModel from "../../../models/TagModel";
import TagModel from "../../../models/TagModel";
import {Link} from "react-router-dom";

export const SearchArticle: React.FC<{ article: ArticleModel, changeSearchUrl }> = (props) => {

    const [tags, setTags] =
        useState<TagModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchTags = async () => {
            const url: string = `http://localhost:8080/api/v1/public/rest/articles/${props.article.articleId}/tags`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();
            const responseData = responseJson._embedded.tags;

            const loadedTags: tagModel[] = [];

            for (const key in responseData) {
                loadedTags.push({
                    tagId: responseData[key].tagId,
                    name: responseData[key].name
                });
            }
            setTags(loadedTags);
            setIsLoading(false);
        };
        fetchTags().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);


    const cuttedContent = () => {
        return props.article.content.length > 300 ? props.article.content.substring(0, 298) + " ..."
            :
            props.article.content;
    }

    return (
        <div>
            <div className="row d-flex mx-md-5 mb-5 shadow-lg">
                <div className="col-lg-6 d-flex align-items-center justify-content-center mb-3">
                    {props.article.image ?
                        <img src={props.article.image}
                             alt="article"
                             className="shadow-lg img-fluid mt-md-3 mb-md-3"/>
                        :
                        <img src={require('../../../Images/ArticlesImages/default.png')}
                             className="img-fluid"
                             alt="article"/>
                    }
                </div>
                <div className="col-lg-6 d-flex flex-column mt-2 justify-content-evenly px-md-4">
                    <h2 className="mb-3">
                        {props.article.title}
                    </h2>
                    <p>{cuttedContent()}</p>
                    <div className="row">
                        <div className="col d-flex justify-content-start align-self-center  mb-3">
                            <Link className="btn main-color text-white shadow-lg w-auto mb-3"
                                  to={`/full-article/${props.article.articleId}`}>
                                Go to article
                            </Link>
                        </div>
                        <div className="col d-flex align-self-center justify-content-end mb-3">
                            {tags.map(tag => (
                                <TagComponent tag={tag} key={tag.name} changeSearchUrl={props.changeSearchUrl}/>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}