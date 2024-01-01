import React from "react";
import articleModel from "../../../models/ArticleModel";

export const CarouselCard: React.FC<{ article: articleModel }> = (props) => {
    return (
        <div className='container p-5  border shadow-lg' style={{minHeight: '58vh'}}>
            <div className='row'>
                <div className='col'>
                    <h1 className='mb-3 mt-3'
                        style={{fontFamily: 'Tahoma', fontSize: '40px'}}>{props.article.title}</h1>

                    <p style={{fontFamily: "Arial", fontSize: '18px', opacity: 0.8}} className="mt-5">
                        {props.article.content}
                    </p>
                    <a className="btn main-color btn-lg text-white mt-4 " href="#">Sign In</a>
                </div>
                <div className='col'>
                    {props.article.image ?
                        <img src={props.article.image} alt='article-image'/> :
                        <img className="testImg" src={require('../../../Images/ArticlesImages/curiosity.png')} alt='default-image'/>
                    }
                </div>
            </div>
        </div>
    );
}