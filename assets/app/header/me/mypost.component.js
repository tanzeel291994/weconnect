import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from './../profile.service';
import { ToastsManager } from 'ng2-toastr';
import { Component, Input, ViewContainerRef } from '@angular/core';
import { Post } from '../../post/post.model';
import { PostService } from '../../post/post.service';
import { NgbdModalContent } from '../../modal/model.component';
var MyPostComponent = /** @class */ (function () {
    function MyPostComponent(toastr, modalService, viewContainerRef, postService, profileService) {
        this.toastr = toastr;
        this.modalService = modalService;
        this.postService = postService;
        this.profileService = profileService;
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
    MyPostComponent.prototype.showIntrestedProfiles = /*
        onEdit() {
            this.postService.editMessage(this.post);
        }
        
    */
    function (post1) {
        var _this = this;
        //const post = new Post(form.value.type,form.value.title,form.value.text);
        this.profileService.showIntrestedProfiles(post1)
            .subscribe(function (searchResults) {
            _this.profiles = searchResults.profiles;
            _this.userId = searchResults.userId;
        });
    };
    MyPostComponent.prototype.open = function (profile) {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.profile = profile;
        modalRef.componentInstance.userId = this.userId;
    };
    MyPostComponent.prototype.delete = function (post) {
        var _this = this;
        this.postService.deletePost(post)
            .subscribe(function (result) { return _this.toastr.success('Post deleted', 'Success!'); });
    };
    MyPostComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-my-post',
                    templateUrl: './mypost.component.html',
                    styles: [".post{\n        margin-left:2rem;\n        margin-right:2rem;\n        margin-bottom:3rem;\n    }\n    .u-align-flex-end{\n       flex:1;\n       display:flex;\n       justify-content:flex-end;\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    MyPostComponent.ctorParameters = function () { return [
        { type: ToastsManager, },
        { type: NgbModal, },
        { type: ViewContainerRef, },
        { type: PostService, },
        { type: ProfileService, },
    ]; };
    MyPostComponent.propDecorators = {
        "post": [{ type: Input },],
    };
    return MyPostComponent;
}());
export { MyPostComponent };
