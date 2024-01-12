import React from "react";
import {ArticleCard} from "./ArticleCard";

export const ArticlesRow = () => {
    return (
        <div className="row" style={{marginBottom: '40px'}}>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
        </div>
    );
}