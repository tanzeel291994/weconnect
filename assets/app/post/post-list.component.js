import { PostService } from './post.service';
import { Component } from "@angular/core";
var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService) {
        this.postService = postService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-post-list',
                    template: "\n        <div class=\"post-box\">\n            <app-post\n                   [post]=\"post\"\n                    *ngFor=\"let post of posts\">\n            </app-post>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    PostListComponent.ctorParameters = function () { return [
        { type: PostService, },
    ]; };
    return PostListComponent;
}());
export { PostListComponent };
