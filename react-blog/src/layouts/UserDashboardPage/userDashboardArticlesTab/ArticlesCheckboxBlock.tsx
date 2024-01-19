import React from "react";
import {ArticleCheckboxInput} from "./ArticleCheckboxInput";
import {ArticleCheckboxBlockTitle} from "./ArticleCheckboxBlockTitle";

export const ArticlesCheckboxBlock = (props) => {

    return (

            <div className="mt-5" style={{width:'140px'}}>
                <ArticleCheckboxBlockTitle title={props.title}/>
                <div className='mx-3'>
                    {(props.options).map(option => (
                        <ArticleCheckboxInput option = {option}/>
                    ))}
                </div>

            </div>

    );
}