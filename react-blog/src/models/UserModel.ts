class UserModel {
    userId: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    birthDate: string;
    avatar?: string;
    isBanned: boolean;
    about?: string
    sentMessages: any;
    receivedMessages: any;
    articles: any;
    comments: any;
    likes: any;

    constructor(userId: number, firstName: string, lastName: string,
                username: string, email: string, birthDate: string, avatar: string,
                about: string, isBanned: boolean, sentMessages: any,
                receivedMessages: any, articles: any, comments: any, likes: any) {

        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.birthDate = birthDate;
        this.avatar = avatar
        this.isBanned = isBanned;
        this.sentMessages = sentMessages;
        this.receivedMessages = receivedMessages;
        this.articles = articles;
        this.comments = comments;
        this.about = about;
        this.likes = likes;
    }
}

export default UserModel;