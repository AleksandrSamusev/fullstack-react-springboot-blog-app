import CommentModel from "../../models/CommentModel";

export const Comment: React.FC<{comment: CommentModel}> = (props) => {

    const date = new Date(props.comment.created);
    const longMonth = date.toLocaleDateString('en-us', {month: 'long'});
    const dateDay = date.getDate();
    const dateYear = date.getFullYear();

    const dateRender = longMonth + ' ' + dateDay + ', ' + dateYear;

    return(
        <div>
            <div className="col-sm-8 col-md-8">
                <h5>{props.comment.commentAuthor.username}</h5>
                <div className="row">
                    <div className="col">
                        {dateRender}
                    </div>
                    <div className="col">

                    </div>
                </div>
                <div className="mt-2">
                    <p>
                        {props.comment.comment}
                    </p>
                </div>
            </div>
            <hr/>
        </div>
    );
}