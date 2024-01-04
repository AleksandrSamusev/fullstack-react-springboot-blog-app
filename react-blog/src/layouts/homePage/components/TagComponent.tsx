import React from "react";
import TagModel from "../../../models/TagModel";

export const TagComponent: React.FC<{tag: TagModel}> = (props) => {
    return (
        <a className="btn btn-sm btn-outline-dark shadow-sm m-2">{props.tag.name}</a>
    );
}