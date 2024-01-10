class LikeModel {
    likeId: number;
    articleId: number;
    user: any;
    created: string;

    constructor(likeId: number, articleId: number, user: any, created: string) {
        this.likeId = likeId;
        this.articleId = articleId;
        this.user = user;
        this.created = created;
    }
}

export default LikeModel;