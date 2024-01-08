import CommentModel from "../../models/CommentModel";

export const Comment: React.FC<{ comment: CommentModel }> = (props) => {

    const date = new Date(props.comment.created);
    const longMonth = date.toLocaleDateString('en-us', {month: 'long'});
    const dateDay = date.getDate();
    const dateYear = date.getFullYear();
    const dateRender = longMonth + ' ' + dateDay + ', ' + dateYear;

    return (
        <div className='container border rounded-3 mb-2 col-12'>
            <div className='row align-items-center pt-3'>
                <span>{props.comment.commentAuthor.username} <span className="badge text-dark fw-light"> {dateRender}</span></span>
            </div>
            <div className="row mt-3" style={{fontFamily: "Arial", fontSize: '16px'}}>
                <p className='mt-1'>
                    {props.comment.comment}
                </p>
            </div>
        </div>
    );
}