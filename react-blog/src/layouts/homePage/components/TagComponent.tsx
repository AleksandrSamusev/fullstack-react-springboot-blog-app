import React, {useState} from "react";
import TagModel from "../../../models/TagModel";

export const TagComponent: React.FC<{tag: TagModel, changeSearchUrl}> = (props) => {

    return (
        <a className="btn btn-sm btn-outline-dark shadow-sm m-2"
        onClick={() => props.changeSearchUrl(props.tag.name)}
        >{props.tag.name}</a>
    );
}