import React, {useEffect, useState} from "react";
import ArticleModel from "../../../models/ArticleModel";
import {TagComponent} from "../../homePage/components/TagComponent";
import tagModel from "../../../models/TagModel";
import TagModel from "../../../models/TagModel";

export const SearchArticle: React.FC<{ article: ArticleModel, changeSearchUrl }> = (props) => {

    const [tags, setTags] =
        useState<TagModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [clicked, setClicked] = useState(false);

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
                        {/*                        <h5 className="card-title mb-3 fw-bold">
                            {props.article.author.username}
                        </h5>*/}
                        <p className="card-text mb-4"
                           style={{fontFamily: 'Arial', fontSize: '16px', textAlign: 'justify'}}>
                            {props.article.content}
                        </p>
                        <a className="btn btn-md main-color text-white shadow-lg" href="#">
                            View details
                        </a>
                        <div className="text-end">
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