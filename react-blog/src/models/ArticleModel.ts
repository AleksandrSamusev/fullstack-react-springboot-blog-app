class ArticleModel {
    articleId: number;
    title: string;
    content: string;
    image?: string;
    author: any;
    published: string;
    likes: number;
    views: number;

    constructor(articleId: number, title: string, content: string, image: string,
                author: string, published: string, likes: number, views: number) {
        this.articleId = articleId;
        this.title = title;
        this.content = content;
        this.image = image;
        this.author = author;
        this.published = published;
        this.likes = likes;
        this.views = views;
    }
}

export default ArticleModel;