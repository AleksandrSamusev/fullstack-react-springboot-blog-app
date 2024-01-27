import React from "react";
import ArticleModel from "../../../models/ArticleModel";


export const CarouselCard: React.FC<{ article: ArticleModel }> = (props) => {

    const cuttedContent = () => {
        return props.article.content.length > 238 ? props.article.content.substring(0, 236) + " ..."
            :
            props.article.content;
    }

    return (
        <div className='container shadow-lg'>
            <div className='row '>
                <div className='col-lg-6 text-center'>
                    {props.article.image ?
                        <img className="shadow-lg img-fluid mt-3 mb-3 mt-lg-0 mb-lg-0" src={props.article.image}
                             alt='article-image'/> :
                        <img className="img-fluid" src={require('../../../Images/ArticlesImages/default.png')}
                             alt='default-image'/>
                    }
                </div>
                <div className='col-lg-6 d-flex flex-column justify-content-between justify-content-lg-evenly'>
                    <h2 className="mx-md-5 px-md-3 px-md-0 mx-lg-0 mt-3 mt-xl-2">{props.article.title}</h2>
                    <p className="mx-md-5 px-md-3 px-md-0 mx-lg-0">{cuttedContent()} </p>
                    <div className="px-md-3 px-md-0">
                        <a className="btn main-color text-white btn-lg mt-3 mx-md-5 mx-lg-0 mb-3  shadow-lg" href="#">Read
                            Article</a>
                    </div>
                </div>

            </div>
        </div>
    );
}