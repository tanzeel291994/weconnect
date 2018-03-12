import { ToastsManager } from 'ng2-toastr';
import { PostService } from './post.service';
import { Post } from './post.model';
import { Component, Input, ViewContainerRef } from '@angular/core';
var PostComponent = /** @class */ (function () {
    function PostComponent(toastr, viewContainerRef, postService) {
        this.toastr = toastr;
        this.postService = postService;
        this.viewContainerRef = viewContainerRef;
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }
    /*
        onEdit() {
            this.postService.editMessage(this.post);
        }
    */
    /*
        onEdit() {
            this.postService.editMessage(this.post);
        }
    */
    PostComponent.prototype.postLike = /*
        onEdit() {
            this.postService.editMessage(this.post);
        }
    */
    function (post1) {
        var _this = this;
        //const post = new Post(form.value.type,form.value.title,form.value.text);
        this.postService.likePost(post1)
            .subscribe(function (data) { _this.toastr.success('Post liked', 'Success!'), post1.liked = true, post1.postlikes = post1.postlikes + 1; }, function (error) { return _this.toastr.error('This is not good!', 'Oops!'); });
    };
    PostComponent.prototype.postInterest = function (post1) {
        var _this = this;
        //const post = new Post(form.value.type,form.value.title,form.value.text);
        this.postService.intrestPost(post1)
            .subscribe(function (data) { _this.toastr.success('Post liked', 'Success!'), post1.intrested = true, post1.postintrests = post1.postintrests + 1; }, function (error) { return _this.toastr.error('This is not good!', 'Oops!'); });
    };
    PostComponent.prototype.postunLike = function (post1) {
        var _this = this;
        //const post = new Post(form.value.type,form.value.title,form.value.text);
        this.postService.unLikePost(post1)
            .subscribe(function (data) { _this.toastr.success('Post interested', 'Success!'), post1.liked = false, post1.postlikes = post1.postlikes - 1; }, function (error) { return _this.toastr.error('This is not good!', 'Oops!'); });
    };
    PostComponent.prototype.postunInterest = function (post1) {
        var _this = this;
        //const post = new Post(form.value.type,form.value.title,form.value.text);
        this.postService.unintrestPost(post1)
            .subscribe(function (data) { _this.toastr.success('Post not interested', 'Success!'), post1.intrested = false, post1.postintrests = post1.postintrests - 1; }, function (error) { return _this.toastr.error('This is not good!', 'Oops!'); });
    };
    PostComponent.prototype.onDelete = function () {
        this.postService.deletePost(this.post)
            .subscribe(function (result) { return console.log(result); });
    };
    PostComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('userId') == this.post.userId;
    };
    PostComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-post',
                    templateUrl: './post.component.html',
                    styles: [".post{\n        margin-left:2rem;\n        margin-right:2rem;\n        margin-bottom:3rem;\n    }"]
                },] },
    ];
    /** @nocollapse */
    PostComponent.ctorParameters = function () { return [
        { type: ToastsManager, },
        { type: ViewContainerRef, },
        { type: PostService, },
    ]; };
    PostComponent.propDecorators = {
        "post": [{ type: Input },],
    };
    return PostComponent;
}());
export { PostComponent };
