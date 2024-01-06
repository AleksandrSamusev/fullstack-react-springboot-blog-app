class CommentModel {
    commentId: number;
    comment: string;
    created: string;
    articleId: number;
    commentAuthor: any;

    constructor(commentId: number, comment: string, created: string, articleId: number, commentAuthor: any) {
        this.commentId = commentId;
        this.comment = comment;
        this.created = created;
        this.articleId = articleId;
        this.commentAuthor = commentAuthor;
    }
}

export default CommentModel;