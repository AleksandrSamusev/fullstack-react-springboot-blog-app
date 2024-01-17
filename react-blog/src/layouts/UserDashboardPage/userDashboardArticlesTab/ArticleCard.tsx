import React from "react";

export const ArticleCard = (props) => {
    return (
        <li style={{listStyleType: "none"}}>
            <div className='row mb-5'>
                <div className='col-8'>
                    <img src={props.article.image} alt='default-image'/>
                </div>
                <div className='col-4'>
                    <div style={{
                        fontFamily: 'Roboto',
                        fontSize: '28px',
                        marginBottom: '20px'
                    }}>{props.article.title} </div>
                    <p>published: {props.article.published.substring(0, 10)}</p>
                    <p>views: {props.article.views} </p>
                    <span>likes: {props.article.likes.length} </span>
                </div>
            </div>
        </li>

    )
        ;
}