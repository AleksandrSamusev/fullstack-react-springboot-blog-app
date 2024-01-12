import React from "react";

export const ArticleCheckboxInput = (props) => {
    return (
        <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" htmlFor="defaultCheck1">{props.option}</label>
        </div>
    );
}