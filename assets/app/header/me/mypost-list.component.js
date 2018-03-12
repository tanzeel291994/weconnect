import { Component } from "@angular/core";
import { PostService } from "../../post/post.service";
var MyPostListComponent = /** @class */ (function () {
    function MyPostListComponent(postService) {
        this.postService = postService;
    }
    MyPostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getMyPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    MyPostListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-my-post-list',
                    template: "\n        <div class=\"post-box\">\n            <app-my-post\n                   [post]=\"post\"\n                    *ngFor=\"let post of posts\">\n            </app-my-post>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    MyPostListComponent.ctorParameters = function () { return [
        { type: PostService, },
    ]; };
    return MyPostListComponent;
}());
export { MyPostListComponent };
