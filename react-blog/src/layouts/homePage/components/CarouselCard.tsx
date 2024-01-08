import React from "react";
import ArticleModel from "../../../models/ArticleModel";


export const CarouselCard: React.FC<{ article: ArticleModel }> = (props) => {

    const cuttedContent = () => {
        return props.article.content.length > 300 ? props.article.content.substring(0, 298) + " ..."
            :
            props.article.content;
    }

    return (
        <div className='container p-5 shadow-lg' style={{minHeight: '54vh'}}>
            <div className='row'>
                <div className='col'>
                    <h1 className='mt-5'
                        style={{
                            fontFamily: 'arial',
                            fontSize: '40px'
                        }}>
                        {props.article.title}
                    </h1>
                    <p
                        style={{
                            fontFamily: "Arial",
                            fontSize: '18px',
                            opacity: 0.8,
                            textAlign: "justify",
                            paddingLeft: '2px',
                            paddingRight: '20px'
                        }}
                        className="mt-4">{cuttedContent()}
                    </p>
                    <div>
                        <a className="btn main-color text-white btn-lg mt-3 shadow-lg" href="#">Read Article</a>
                    </div>
                </div>
                <div className='col text-center'>
                    {props.article.image ?
                        <img className="shadow-lg" src={props.article.image} alt='article-image'/> :
                        <img src={require('../../../Images/ArticlesImages/default.png')}
                             alt='default-image'/>
                    }
                </div>
            </div>
        </div>
    );
}