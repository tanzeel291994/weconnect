var Post = /** @class */ (function () {
    function Post(type, title, text, liked, intrested, uname, uinfo, postcreated, postlikes, postintrests, postId, userId) {
        this.type = type;
        this.title = title;
        this.text = text;
        this.liked = liked;
        this.intrested = intrested;
        this.uname = uname;
        this.uinfo = uinfo;
        this.postcreated = postcreated;
        this.postlikes = postlikes;
        this.postintrests = postintrests;
        this.postId = postId;
        this.userId = userId;
    }
    return Post;
}());
export { Post };
