class CommentModel {
    commentId: number;
    comment: string;
    created: string;
    articleId: number;
    articleTitle: string;
    articleImage?: string;
    commentAuthor: any;

    constructor(commentId: number, comment: string, created: string, articleId: number,
                articleTitle: string, articleImage: string, commentAuthor: any) {
        this.commentId = commentId;
        this.comment = comment;
        this.created = created;
        this.articleId = articleId;
        this.articleTitle = articleTitle;
        this.articleImage = articleImage;
        this.commentAuthor = commentAuthor;
    }
}

export default CommentModel;