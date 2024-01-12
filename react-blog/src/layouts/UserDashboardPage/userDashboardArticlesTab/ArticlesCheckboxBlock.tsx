import React from "react";
import {ArticleCheckboxInput} from "./ArticleCheckboxInput";
import {ArticleCheckboxBlockTitle} from "./ArticleCheckboxBlockTitle";

export const ArticlesCheckboxBlock = (props) => {

    return (
        <div className="row" style={{height: '25vh', marginBottom: '100px'}}>
            <div className="px-4 mt-5">
                <ArticleCheckboxBlockTitle title={props.title}/>
                {(props.options).map(option => (
                    <ArticleCheckboxInput option = {option}/>
                ))}
            </div>
        </div>
    );
}