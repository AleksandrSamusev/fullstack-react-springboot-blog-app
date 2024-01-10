class ArticleModel {
    articleId: number;
    title: string;
    content: string;
    image?: string;
    author?: any;
    published: string;
    likes: any;
    views: number;
    tags?:any

    constructor(articleId: number, title: string, content: string, image: string,
                author: any, published: string, likes: any, views: number, tags: any) {
        this.articleId = articleId;
        this.title = title;
        this.content = content;
        this.image = image;
        this.author = author;
        this.published = published;
        this.likes = likes;
        this.views = views;
        this.tags = tags
    }
}

export default ArticleModel;