import React from "react";
import {ArticleCheckboxInput} from "./ArticleCheckboxInput";
import {ArticleCheckboxBlockTitle} from "./ArticleCheckboxBlockTitle";

export const ArticlesCheckboxBlock = (props) => {

    return (

            <div className="px-4 mt-5" style={{width:'140px'}}>
                <ArticleCheckboxBlockTitle title={props.title}/>
                {(props.options).map(option => (
                    <ArticleCheckboxInput option = {option}/>
                ))}
            </div>

    );
}