import { Post } from './post.model';
import { PostService } from './post.service';
import { Component, ViewContainerRef } from "@angular/core";
import { ToastsManager } from 'ng2-toastr';
var PostAddComponent = /** @class */ (function () {
    function PostAddComponent(toastr, viewContainerRef, postService) {
        this.toastr = toastr;
        this.postService = postService;
        this.viewContainerRef = viewContainerRef;
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }
    PostAddComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var post = new Post(form.value.type, form.value.title, form.value.text, false, false);
        console.log(form.value.title);
        this.postService.addPost(post)
            .subscribe(function (data) { return _this.toastr.success('Posted', 'Success!'); }, function (error) { return _this.toastr.error('Try again', 'Oops!'); });
        form.resetForm();
    };
    PostAddComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-post-add',
                    templateUrl: './post-add.component.html',
                    styles: ["select.form-control{height:34px !important; }"]
                },] },
    ];
    /** @nocollapse */
    PostAddComponent.ctorParameters = function () { return [
        { type: ToastsManager, },
        { type: ViewContainerRef, },
        { type: PostService, },
    ]; };
    return PostAddComponent;
}());
export { PostAddComponent };
