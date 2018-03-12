import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Post } from "./post.model";
var PostService = /** @class */ (function () {
    // messageIsEdit = new EventEmitter<Post>();
    function PostService(http) {
        this.http = http;
        this.posts = [];
    }
    PostService.prototype.addPost = function (post) {
        var _this = this;
        var body = JSON.stringify(post);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/post/add', body, { headers: headers }) //check this
            .map(function (response) {
            var result = response.json();
            var post = new Post(result.obj.type, result.obj.title, result.obj.text, false, false, result.obj.user.firstName, result.obj.user.occupation, result.obj._id, result.obj.user._id);
            _this.posts.push(post);
            return post;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PostService.prototype.getPosts = function () {
        var _this = this;
        return this.http.get('http://localhost:3000/post')
            .map(function (response) {
            var posts = response.json().obj.posts;
            var user = response.json().obj.user._id;
            var transformedPosts = [];
            for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                var post = posts_1[_i];
                // console.log(this.checkUserLikedPost(post.likes,user));
                transformedPosts.push(new Post(_this.getPostType(post.type), post.title, post.text, _this.checkUserLikedPost(post.likes, user), _this.checkUserInterestedPost(post.intrested, user), post.user.profile.firstName + " " + post.user.profile.lastName, post.user.profile.occupation, ////edit this from database
                post.created_at, post.likes.length, post.intrested.length, post._id, post.user._id));
            }
            _this.posts = transformedPosts;
            return transformedPosts;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PostService.prototype.getMyPosts = function () {
        var _this = this;
        return this.http.get('http://localhost:3000/POST/myposts')
            .map(function (response) {
            var posts = response.json().obj.posts;
            var user = response.json().obj.user._id;
            var transformedPosts = [];
            for (var _i = 0, posts_2 = posts; _i < posts_2.length; _i++) {
                var post = posts_2[_i];
                // console.log(this.checkUserLikedPost(post.likes,user));
                transformedPosts.push(new Post(_this.getPostType(post.type), post.title, post.text, _this.checkUserLikedPost(post.likes, user), _this.checkUserInterestedPost(post.intrested, user), post.user.profile.firstName + " " + post.user.profile.lastName, post.user.profile.occupation, ////edit this from database
                post.created_at, post.likes.length, post.intrested.length, post._id, post.user._id));
            }
            _this.posts = transformedPosts;
            return transformedPosts;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PostService.prototype.checkUserLikedPost = function (likesArray, userId) {
        return likesArray.indexOf(userId) > -1;
    };
    PostService.prototype.checkUserInterestedPost = function (intrestsArray, userId) {
        return intrestsArray.indexOf(userId) > -1;
    };
    PostService.prototype.getPostType = function (type) {
        if (type == 1)
            return "General";
        else if (type == 2)
            return "Looking for partner";
        else
            return "Looking to hire";
    };
    PostService.prototype.likePost = function (post) {
        return this.http.get('http://localhost:3000/post/' + post.postId + '/like/')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PostService.prototype.unLikePost = function (post) {
        //  this.posts.splice(this.posts.indexOf(post), 1);
        return this.http.get('http://localhost:3000/post/' + post.postId + '/un-like/')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PostService.prototype.intrestPost = function (post) {
        //this.posts.splice(this.posts.indexOf(post), 1);
        return this.http.get('http://localhost:3000/post/' + post.postId + '/intrest/')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PostService.prototype.unintrestPost = function (post) {
        //this.posts.splice(this.posts.indexOf(post), 1);
        return this.http.get('http://localhost:3000/post/' + post.postId + '/un-intrest/')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PostService.prototype.deletePost = function (post) {
        this.posts.splice(this.posts.indexOf(post), 1);
        return this.http.delete('http://localhost:3000/post/delete/' + post.postId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PostService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PostService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return PostService;
}());
export { PostService };
