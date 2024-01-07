import React from "react";
import CommentModel from "../../models/CommentModel";
import {Link} from "react-router-dom";
import {Comment} from "../utils/Comment";

export const LatestComments: React.FC<{
    comments: CommentModel[], articleId: number | undefined, mobile: boolean
}> = (props) => {

    return (
        <div className={props.mobile ? 'mt-3' : 'row mt-5 '}>
            <div className={props.mobile ? '' : 'col-sm-2 col-md-2'}>
                <h4 className="mt-2">Latest comments</h4>
            </div>
            <div className="col-sm-10 col-md-10">
                {props.comments.length > 0 ?
                    <>
                        {props.comments.slice(0, 3).map(eachComment => (
                            <Comment comment={eachComment} key={eachComment.commentId}></Comment>
                        ))}

                        <div className="m-3 mt-4">
                            <Link type='button' className='btn btn-md main-color text-white'
                                  to='#'>All Comments</Link>
                        </div>
                    </>
                    :
                    <div className='m-3'>
                        <p className='lead'>Currently there are no comments for this article</p>
                    </div>
                }
            </div>
        </div>
    );

}